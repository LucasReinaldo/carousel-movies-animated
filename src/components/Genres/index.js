import React from "react";

import { Container, Genre, GenreText } from "./styles";

const Genres = ({ genres }) => {
  return (
    <Container>
      {genres.map((genre, i) => (
        <Genre key={i}>
          <GenreText>{genre}</GenreText>
        </Genre>
      ))}
    </Container>
  );
};

export default Genres;
