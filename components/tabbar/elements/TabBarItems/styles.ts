import { StyleSheet } from "react-native";

export const styling = (buttonCenterX: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 32,
    },
    pessable: {
      ...StyleSheet.absoluteFillObject,
      left: buttonCenterX,
      top: 12,
    },
  });
