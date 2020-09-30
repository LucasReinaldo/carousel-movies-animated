import { Platform, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const SPACING = 8;
export const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2; //size of the screen less size of the poster, / 2 to show the posters
export const BACKDROP_HEIGHT = height * 0.65;
