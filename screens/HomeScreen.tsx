import * as React from "react";

import {
  ForecastSheet,
  HomeBackground,
  WeatherInfo,
  TabBar,
} from "@components";
import { currentWeatherData } from "@data";
import { ForecastSheetProvider } from "../context/ForecastSheetContext";

export const HomeScreen = () => {
  return (
    <ForecastSheetProvider>
      <HomeBackground />
      <WeatherInfo weather={currentWeatherData} />
      <ForecastSheet />
      <TabBar />
    </ForecastSheetProvider>
  );
};
