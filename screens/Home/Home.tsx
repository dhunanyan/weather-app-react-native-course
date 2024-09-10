import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { HomeBackground, WeatherInfo, WeatherTabBar } from "@components";
import { currentWeather } from "@data";

export const Home = () => {
  return (
    <SafeAreaProvider>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <WeatherTabBar />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};
