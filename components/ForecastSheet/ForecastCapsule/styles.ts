import { StyleSheet } from "react-native";

export const styling = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      position: "relative",
      width,
      height,
    },
    canvas: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
    },
    content: {
      width,
      height,
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: width / 2,
      paddingVertical: 19,
    },
    time: {
      fontFamily: "SF-Semibold",
      fontSize: 15,
      lineHeight: 20,
      color: "white",
      letterSpacing: 0.5,
    },
    probabilityContainer: {
      paddingTop: 10,
      paddingBottom: 12,
    },
    image: {
      width: width / 2,
      height: width / 2,
    },
    probability: {
      fontFamily: "SF-Semibold",
      fontSize: 13,
      lineHeight: 14,
      color: "#40cbd8",
      textAlign: "center",
    },
    temperature: {
      fontFamily: "SF-Semibold",
      fontSize: 20,
      lineHeight: 24,
      color: "white",
      letterSpacing: 0.38,
    },
  });
