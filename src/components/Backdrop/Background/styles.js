import styled from "styled-components/native";
import { Animated } from "react-native";
import Svg from "react-native-svg";

import { width, BACKDROP_HEIGHT } from "../../../global.styles";

export const BackgroundImage = styled.Image`
  width: ${width}px;
  height: ${BACKDROP_HEIGHT}px;
`;

export const AnimatedSvg = Animated.createAnimatedComponent(Svg);