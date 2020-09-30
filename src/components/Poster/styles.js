import styled from "styled-components/native";
import { Animated } from "react-native";
import { ITEM_SIZE, SPACING } from "../../global.styles";

export const Container = styled.View`
  width: ${ITEM_SIZE}px;
`;

export const PosterImage = styled.Image`
  width: 100%;
  height: ${ITEM_SIZE * 1.2}px;
  border-radius: 12px;
  margin: 0;
  margin-bottom: 10px;
`;

const RenderView = styled.View`
  padding: ${SPACING * 2}px;
  align-items: center;
  background-color: #f1f2f6;
  border-radius: 24px;
  margin: 0 ${SPACING}px;
`;

export const RenderAnimatedView = Animated.createAnimatedComponent(RenderView);

export const Title = styled.Text`
  font-size: 24px;
`;

export const Description = styled.Text`
  font-size: 13px;
`;
