import * as React from "react";
import { HomeBackground, WeatherTabBar } from "@components";
import { StatusBar } from "expo-status-bar";

export const Home = () => {
  return (
    <>
      <HomeBackground />
      <WeatherTabBar />
      <StatusBar style="light" />
    </>
  );
};
