import { StyleSheet } from "react-native";

export const styling = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      width,
      height,
    },
    canvas: {
      flex: 1,
    },
  });
