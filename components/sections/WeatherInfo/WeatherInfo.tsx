import * as React from "react";
import { Text, View } from "react-native";

import { Weather } from "@models";
import { DEGREE_SYMBOL } from "@utils";

import { styling } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type WeatherInfoPropsType = {
  weather: Weather;
};

export const WeatherInfo = ({ weather }: WeatherInfoPropsType) => {
  const { city, temperature, condition, high, low } = weather;
  // STATUSBAR OFFSET
  const { top: statusBarOffset } = useSafeAreaInsets();
  const weatherInfoMargin = statusBarOffset + 51;

  const styles = styling(weatherInfoMargin);

  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.temperature}>
        {temperature}
        {DEGREE_SYMBOL}
      </Text>
      <Text style={styles.condition}>{condition}</Text>
      <Text style={styles.minMaxText}>
        H: {high} {DEGREE_SYMBOL}L :{low}
      </Text>
    </View>
  );
};
