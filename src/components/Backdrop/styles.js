import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { width, BACKDROP_HEIGHT } from "../../global.styles";

export const Container = styled.View`
  position: absolute;
  height: ${BACKDROP_HEIGHT}px;
  width: ${width}px;
`;

export const Gradient = styled(LinearGradient)`
  width: ${width}px;
  height: ${BACKDROP_HEIGHT}px;
  position: absolute;
  bottom: 0;
`;