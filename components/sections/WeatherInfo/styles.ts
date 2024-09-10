import { StyleSheet } from "react-native";
import { COLORS } from "@config";

export const styling = (weatherInfoMargin: number) => {
  const { cityTextColor, temperatureColor, conditionColor, minMaxTextColor } =
    COLORS.Sections.WeatherInfo;

  return StyleSheet.create({
    container: {
      marginTop: weatherInfoMargin,
      alignItems: "center",
    },
    cityText: {
      fontFamily: "SF-Regular",
      fontSize: 34,
      lineHeight: 41,
      color: cityTextColor,
    },
    temperature: {
      fontFamily: "SF-Thin",
      fontSize: 96,
      lineHeight: 96,
      color: temperatureColor,
    },
    condition: {
      fontFamily: "SF-Semibold",
      fontSize: 20,
      lineHeight: 20,
      color: conditionColor,
    },
    minMaxText: {
      fontFamily: "SF-Semibold",
      fontSize: 20,
      lineHeight: 20,
      color: minMaxTextColor,
    },
  });
};
