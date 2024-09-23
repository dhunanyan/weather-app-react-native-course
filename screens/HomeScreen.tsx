import * as React from "react";

import {
  ForecastSheet,
  HomeBackground,
  WeatherInfo,
  TabBar,
} from "@components";
import { ForecastSheetProvider } from "../context/ForecastSheetContext";

export const HomeScreen = () => {
  return (
    <ForecastSheetProvider>
      <HomeBackground />
      <WeatherInfo />
      <ForecastSheet />
      <TabBar />
    </ForecastSheetProvider>
  );
};
