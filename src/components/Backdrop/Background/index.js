import React, { useEffect } from "react";
import MaskedView from "@react-native-community/masked-view";
import Svg, { Rect } from "react-native-svg";

import { height, ITEM_SIZE, width } from "../../../global.styles";

import { BackgroundImage, AnimatedSvg } from "./styles";

const Background = ({ item, index, scrollX }) => {
  const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE];
  const animatedMaskView = scrollX.interpolate({
    inputRange,
    outputRange: [-width, 0],
  });

  return (
    <MaskedView
      style={{ position: "absolute" }}
      maskElement={
        <AnimatedSvg
          style={{ transform: [{ translateX: animatedMaskView }] }}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <Rect x="0" y="0" width={width} height={height} fill="white" />
        </AnimatedSvg>
      }
    >
      <BackgroundImage
        source={{ uri: item.backdrop }}
        style={{ resizeMode: "cover" }}
      />
    </MaskedView>
  );
};

export default Background;
