import background from "../assets/home/background.png";
import house from "../assets/home/house.png";

import cloudy_large from "../assets/forecast/cloudy_large.png";
import rain_large from "../assets/forecast/rain_large.png";
import rain from "../assets/forecast/rain.png";
import sun_rain from "../assets/forecast/sun_rain.png";
import tornado_large from "../assets/forecast/tornado_large.png";
import wind_large from "../assets/forecast/wind_large.png";
import windy from "../assets/forecast/windy.png";

import * as ReactNative from "react-native";

export type ImagesType = {
  home: {
    background: ReactNative.ImageSourcePropType;
    house: ReactNative.ImageSourcePropType;
  };
  forecast: {
    cloudy_large: ReactNative.ImageSourcePropType;
    rain_large: ReactNative.ImageSourcePropType;
    rain: ReactNative.ImageSourcePropType;
    sun_rain: ReactNative.ImageSourcePropType;
    tornado_large: ReactNative.ImageSourcePropType;
    wind_large: ReactNative.ImageSourcePropType;
    windy: ReactNative.ImageSourcePropType;
  };
};

export const IMAGES = {
  home: {
    background,
    house,
  },
  forecast: {
    cloudy_large,
    rain_large,
    rain,
    sun_rain,
    tornado_large,
    wind_large,
    windy,
  },
} as ImagesType;
