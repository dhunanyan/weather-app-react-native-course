import * as ExpoLocation from "expo-location";
import { Alert } from "react-native";

import { WeatherData } from "@models";
import { WeatherService } from "./WeatherService";

export const getLocationData = async (): Promise<{
  latitude: number | null;
  longitude: number | null;
}> => {
  const { status } = await ExpoLocation.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    Alert.alert("Permission to access location was denied");
    return { latitude: null, longitude: null };
  }

  const location = await ExpoLocation.getCurrentPositionAsync();
  const { latitude, longitude } = location.coords;

  return { latitude, longitude };
};

export const fetchWeatherData = async (
  latitude: number,
  longitude: number
): Promise<WeatherData> => {
  const service = new WeatherService(latitude, longitude);
  return await service.fetchAll();
};
