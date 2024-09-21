import * as React from "react";

import {
  ForecastSheet,
  HomeBackground,
  WeatherInfo,
  TabBar,
} from "@components";
import { currentWeatherData } from "@data";

export const HomeScreen = () => {
  return (
    <>
      <HomeBackground />
      <WeatherInfo weather={currentWeatherData} />
      <ForecastSheet />
      <TabBar />
    </>
  );
};
