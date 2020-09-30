import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { SPACING } from "../../global.styles";

export const Container = styled.View`
  bottom: 72px;
  margin: 0 auto;
`;

export const TouchableButton = styled(RectButton)`
  padding: ${SPACING}px;
  border: 1px solid #c23616;
  background: #c23616;
  border-radius: 20px;
`;

export const TextButton = styled.Text`
  text-transform: uppercase;
  color: #f1f2f6;
  font-family: "Menlo";
  font-weight: 500;
  font-size: 20px;
`;
