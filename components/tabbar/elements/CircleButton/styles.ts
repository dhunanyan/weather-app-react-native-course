import { ScaledSize, StyleSheet } from "react-native";

export const styling = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      width,
      height,
    },
  });
