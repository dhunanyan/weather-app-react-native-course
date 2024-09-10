import * as React from "react";
import { StatusBar } from "expo-status-bar";

import { HomeBackground, WeatherInfo, WeatherTabBar } from "@components";
import { currentWeather } from "@data";

export const Home = () => {
  return (
    <>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <WeatherTabBar />
      <StatusBar style="light" />
    </>
  );
};
