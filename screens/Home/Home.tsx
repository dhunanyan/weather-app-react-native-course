import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  ForecastSheet,
  HomeBackground,
  WeatherInfo,
  WeatherTabBar,
} from "@components";
import { currentWeather } from "@data";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { styles } from "./styles";

export const Home = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <HomeBackground />
        <WeatherInfo weather={currentWeather} />
        <ForecastSheet />
        <WeatherTabBar />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
