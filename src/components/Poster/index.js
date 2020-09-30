import React from "react";

import Rating from "../Rating";
import Genres from "../Genres";

import { ITEM_SIZE } from "../../global.styles";

import {
  Container,
  PosterImage,
  RenderAnimatedView,
  Title,
  Description,
} from "./styles";

const Poster = ({ index, item, scrollX }) => {
  const inputRange = [
    (index - 2) * ITEM_SIZE, //prev
    (index - 1) * ITEM_SIZE, //current
    index * ITEM_SIZE, //next
  ];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [100, 60, 100],
    extrapolate: "clamp",
  });

  return (
    <Container>
      <RenderAnimatedView style={{ transform: [{ translateY }] }}>
        <PosterImage
          source={{ uri: item.poster }}
          style={{ resizeMode: "cover" }}
        />
        <Title numberOfLines={1}>{item.title}</Title>
        <Rating rating={item.rating} />
        <Genres genres={item.genres} />
        <Description numberOfLines={3}>{item.description}</Description>
      </RenderAnimatedView>
    </Container>
  );
};

export default Poster;
