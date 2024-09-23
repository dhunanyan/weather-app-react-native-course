import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { fetchWeatherData, getLocationData } from "@services";
import { useWeatherData, WeatherDataProvider } from "@context";
import { eventEmitter } from "@utils";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { setWeatherData } = useWeatherData();
  const [fontsLoaded] = useFonts({
    "SF-Regular": require("@assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Semibold": require("@assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SF-Thin": require("@assets/fonts/SF-Pro-Display-Thin.otf"),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  React.useEffect(() => {
    const handleLocationEvent = async () => {
      const locationData = await getLocationData();
      if (!locationData) {
        return;
      }

      const { latitude, longitude } = locationData;

      if (latitude === null || longitude === null) {
        return;
      }

      const weatherData = await fetchWeatherData(latitude, longitude);
      setWeatherData(weatherData);
    };

    const listener = eventEmitter.addListener("locationEvent", async () => {
      await handleLocationEvent();
      return () => listener.remove();
    });
  }, [setWeatherData]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <WeatherDataProvider>
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="light" />
        </GestureHandlerRootView>
      </WeatherDataProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: { flex: 1 },
});
