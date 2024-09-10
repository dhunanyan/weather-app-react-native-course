import * as React from "react";
import { Text, View } from "react-native";

import { Weather } from "@models";
import { DEGREE_SYMBOL } from "@utils";

import { styles } from "./styles";

type WeatherInfoPropsType = {
  weather: Weather;
};

export const WeatherInfo = ({ weather }: WeatherInfoPropsType) => {
  const { city, temperature, condition, high, low } = weather;
  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.temperature}>{temperature}</Text>
      <Text style={styles.condition}>{condition}</Text>
      <Text style={styles.minMaxText}>
        H: {high} {DEGREE_SYMBOL}L :{low}
      </Text>
    </View>
  );
};
