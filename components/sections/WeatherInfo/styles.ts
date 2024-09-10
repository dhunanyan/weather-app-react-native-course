import { StyleSheet } from "react-native";

export const styling = (weatherInfoMargin: number) =>
  StyleSheet.create({
    container: {
      marginTop: weatherInfoMargin,
    },
    cityText: {},
    temperature: {},
    condition: {},
    minMaxText: {},
  });
