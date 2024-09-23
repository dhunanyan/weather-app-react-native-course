import React from "react";
import {
  Canvas,
  FitBox,
  LinearGradient,
  Path,
  rect,
  Skia,
  usePathInterpolation,
  vec,
} from "@shopify/react-native-skia";
import { Image, Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Forecast } from "@models";
import { useApplicationDimensions } from "@hooks";
import { DEGREE_SYMBOL } from "@config";
import { styles } from "./styles";

export type WeatherWidgetPropsType = {
  forecast: Forecast;
};

export const WeatherWidget = ({ forecast }: WeatherWidgetPropsType) => {
  const { temperature, high, low, location, icon, weather } = forecast;
  const { width } = useApplicationDimensions();
  const widgetWidth = width * 0.876;
  const widgetHeight = widgetWidth / 1.95;

  const initialPath = Skia.Path.MakeFromSVGString(
    "M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
  );
  const skewedPath = Skia.Path.MakeFromSVGString(
    "M1.13802 66.5329C0.149349 32.5295 -0.344987 15.5278 10.4273 6.20755C21.1996 -3.11274 37.9536 -0.179038 71.4615 5.68837L301.126 45.9037C317.815 48.826 326.159 50.2872 331.268 56.104C336.377 61.9208 336.75 70.384 337.494 87.3105L338.979 121.066C339.928 142.636 340.403 153.421 333.905 160.211C327.408 167 316.613 167 295.022 167H46.7985C26.6014 167 16.5028 167 10.1002 160.781C3.69752 154.562 3.40402 144.467 2.81702 124.279L1.13802 66.5329Z"
  );

  const progress = useSharedValue(0);
  const path = usePathInterpolation(
    progress,
    [0, 1],
    [skewedPath!, initialPath!]
  );

  const animatedCanvasStyles = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${interpolate(
          progress.value,
          [0, 1],
          [0, -3.5],
          Extrapolation.CLAMP
        )}deg`,
      },
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 1.075],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));
  const animatedImageStyles = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${interpolate(
          progress.value,
          [0, 1],
          [0, 3.5],
          Extrapolation.CLAMP
        )}deg`,
      },
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 1.2],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));
  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);
  const AnimatedImage = Animated.createAnimatedComponent(Image);

  const handlePress = () => {
    progress.value = withTiming(progress.value === 1 ? 0 : 1, {
      duration: 550,
      easing: Easing.elastic(2),
    });
  };

  return (
    <Pressable
      style={[styles.container, { width: widgetWidth, height: widgetHeight }]}
      onPress={handlePress}
    >
      <AnimatedCanvas style={[styles.canvas, animatedCanvasStyles]}>
        <FitBox
          src={rect(0, 0, 342, 175)}
          dst={rect(0, 0, widgetWidth, widgetHeight)}
        >
          <Path path={path}>
            <LinearGradient
              start={vec(0, widgetHeight / 2)}
              end={vec(widgetWidth, widgetHeight / 2)}
              colors={["#5936B4", "#362A84"]}
            />
          </Path>
        </FitBox>
      </AnimatedCanvas>

      <View style={styles.contentView}>
        <Text style={styles.temperatureText}>
          {temperature} {DEGREE_SYMBOL}
        </Text>
        <AnimatedImage
          source={icon}
          style={[
            styles.image,
            animatedImageStyles,
            { left: widgetWidth - 160 },
          ]}
        />
        <Text style={styles.highLowText}>
          {`H: ${high} ${DEGREE_SYMBOL}    L: ${low} ${DEGREE_SYMBOL}`}
        </Text>
        <View style={styles.weatherLocationView}>
          <Text style={styles.locationText}>{location}</Text>
          <Text style={styles.weatherText}>{weather}</Text>
        </View>
      </View>
    </Pressable>
  );
};

{
  /* <svg width="342" height="175" viewBox="0 0 342 175" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z" fill="url(#paint0_linear_60_738)"/>
<defs>
<linearGradient id="paint0_linear_60_738" x1="0" y1="128" x2="354.142" y2="128" gradientUnits="userSpaceOnUse">
<stop stop-color="#5936B4"/>
<stop offset="1" stop-color="#362A84"/>
</linearGradient>
</defs>
</svg> */
}
