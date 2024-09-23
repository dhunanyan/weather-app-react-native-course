import * as React from "react";
import { WeatherData } from "@models";
import { currentWeatherData, hourly, weekly } from "@data";

export type WeatherDataProviderPropsType = {
  children: React.ReactNode;
};

export type WeatherContextType = {
  weatherData: WeatherData;
  setWeatherData: (data: WeatherData) => void;
};

const defaultWeatherData = {
  currentWeather: currentWeatherData,
  hourlyForecast: hourly,
  weeklyForecast: weekly,
};

export const WeatherDataContext = React.createContext<WeatherContextType>({
  weatherData: defaultWeatherData,
  setWeatherData: () => {},
});

export const WeatherDataProvider = ({
  children,
}: WeatherDataProviderPropsType) => {
  const [weatherData, setWeatherData] =
    React.useState<WeatherData>(defaultWeatherData);

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export const useWeatherData = (): WeatherContextType => {
  const context = React.useContext(WeatherDataContext);
  if (context === null) {
    throw new Error(
      "useWeatherDataPosition must be used within a Forecast Sheet Provider"
    );
  }

  return context;
};
