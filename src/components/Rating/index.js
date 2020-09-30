import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Container, RatingNumber } from "./styles";

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating / 2);
  const maxStars = Array(5 - filledStars).fill("staro");
  const rate = [...Array(filledStars).fill("star"), ...maxStars];

  return (
    <Container>
      <RatingNumber>{rating}</RatingNumber>
      {rate.map((type, index) => {
        return <AntDesign key={index} name={type} size={14} color="tomato" />;
      })}
    </Container>
  );
};

export default Rating;
