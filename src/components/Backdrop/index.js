import React from "react";
import { FlatList } from "react-native";
import Svg, { Rect } from "react-native-svg";

import Background from './Background'

import { Container, Gradient } from "./styles";

const Backdrop = ({ movies, scrollX }) => {
  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          item.backdrop ? <Background item={item} index={index} scrollX={scrollX} /> : null
        )}
      />
      <Gradient colors={['transparent', '#dcdde1']} />
    </Container>
  );
};

export default Backdrop;
