import { StyleSheet } from "react-native";

export const styling = (height: number) =>
  StyleSheet.create({
    canvas: {
      height,
      ...StyleSheet.absoluteFillObject,
    },
  });
