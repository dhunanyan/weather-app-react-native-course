import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  ForecastSheet,
  HomeBackground,
  WeatherInfo,
  TabBar,
} from "@components";
import { currentWeatherData } from "@data";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { styles } from "./styles";

export const Home = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <HomeBackground />
        <WeatherInfo weather={currentWeatherData} />
        <ForecastSheet />
        <TabBar />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
