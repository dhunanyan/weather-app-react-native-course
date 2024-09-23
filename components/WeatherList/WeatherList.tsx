import * as React from "react";
import { View } from "react-native";

import { WeatherListHeader } from "./WeatherListHeader";

export const WeatherList = () => {
  return (
    <View style={{ flex: 1 }}>
      <WeatherListHeader />
    </View>
  );
};