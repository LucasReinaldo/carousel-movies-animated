import React from "react";

import { Container, TextButton, TouchableButton } from './styles';

const Button = () => {
  return (
    <Container>
      <TouchableButton>
        <TextButton>select seats</TextButton>
      </TouchableButton>
    </Container>
  );
};

export default Button;
