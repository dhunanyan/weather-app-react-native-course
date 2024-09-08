import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SFProRegular: require("@assets/fonts/SF-Pro-Display-Regular.otf"),
    SFProSemibold: require("@assets/fonts/SF-Pro-Display-Semibold.otf"),
    SFProThin: require("@assets/fonts/SF-Pro-Display-Thin.otf"),
  });

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
