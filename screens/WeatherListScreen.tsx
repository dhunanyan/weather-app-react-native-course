import * as React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const WeatherListScreen = () => {
  const { top: statusBarOffset } = useSafeAreaInsets();

  return (
    <Text style={{ marginTop: statusBarOffset }}>Weather List Screen</Text>
  );
};
