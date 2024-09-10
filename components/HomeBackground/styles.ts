import { ScaledSize, StyleSheet } from "react-native";

export const styling = (
  { width, height }: ScaledSize,
  smokeHeight: number,
  smokeOffset: number
) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    backgroundCanvas: {
      flex: 1,
    },
    imageBackground: {
      height: "100%",
    },
    smokeCanvas: {
      height: smokeHeight,
      ...StyleSheet.absoluteFillObject,
      top: smokeOffset,
    },
    image: {
      width: width,
      height: width,
      ...StyleSheet.absoluteFillObject,
      top: "36%",
    },
  });
