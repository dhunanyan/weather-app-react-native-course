import { StyleSheet, ScaledSize } from "react-native";

export const styling = ({ height }: ScaledSize, tabBarHeight: number) =>
  StyleSheet.create({
    container: {
      height: tabBarHeight,
      ...StyleSheet.absoluteFillObject,
      top: height - tabBarHeight,
    },
  });
