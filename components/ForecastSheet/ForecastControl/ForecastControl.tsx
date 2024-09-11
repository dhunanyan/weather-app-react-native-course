import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const ForecastControl = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.forecastText}>Hourly Forecast</Text>
      <Text style={styles.forecastText}>Weekly Forecast</Text>
    </View>
  );
};
