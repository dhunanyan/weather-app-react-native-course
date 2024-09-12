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
      width,
      fontFamily: "SF-Semibold",
      fontSize: 15,
      lineHeight: 20,
      color: "white",
      letterSpacing: 0.5,
      textAlign: "center",
    },
    probabilityContainer: {
      width,
      paddingTop: 10,
      paddingBottom: 12,
    },
    image: {
      width: width / 2,
      height: width / 2,
      alignSelf: "center",
    },
    probability: {
      width,
      fontFamily: "SF-Semibold",
      fontSize: 13,
      lineHeight: 14,
      color: "#40cbd8",
      textAlign: "center",
    },
    temperature: {
      width: width,
      fontFamily: "SF-Semibold",
      fontSize: 20,
      lineHeight: 24,
      color: "white",
      letterSpacing: 0.38,
      textAlign: "center",
    },
  });
