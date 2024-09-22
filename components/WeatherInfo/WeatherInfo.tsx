import * as React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Extrapolate } from "@shopify/react-native-skia";

import { Weather } from "@models";
import { useForecastSheetPosition } from "@context";
import { SEPARATOR_SYMBOL, DEGREE_SYMBOL } from "@config";

import { styling } from "./styles";

type WeatherInfoPropsType = {
  weather: Weather;
};

export const WeatherInfo = ({ weather }: WeatherInfoPropsType) => {
  const { city, temperature, condition, high, low } = weather;
  // STATUSBAR OFFSET
  const { top: statusBarOffset } = useSafeAreaInsets();
  const topMargin = 51;
  const weatherInfoMargin = statusBarOffset + topMargin;

  const styles = styling(weatherInfoMargin);

  const animatedPosition = useForecastSheetPosition();
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedPosition.value,
          [0, 1],
          [0, -topMargin],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  const animatedTempTextStyles = useAnimatedStyle(() => ({
    fontFamily: animatedPosition.value > 0.5 ? "SF-Semibold" : "SF-Thin",
    fontSize: interpolate(
      animatedPosition.value,
      [0, 1],
      [96, 20],
      Extrapolation.CLAMP
    ),
    lineHeight: interpolate(
      animatedPosition.value,
      [0, 1],
      [96, 20],
      Extrapolation.CLAMP
    ),
    color: interpolateColor(
      animatedPosition.value,
      [0, 1],
      ["white", "rgba(235, 235, 245, 0.6)"]
    ),
    opacity: interpolate(animatedPosition.value, [0, 0.5, 1], [1, 0, 1]),
  }));

  const animatedMinMaxTextStyles = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedPosition.value,
      [0, 0.5],
      [1, 0],
      Extrapolation.CLAMP
    ),
  }));

  const animatedSeparatorTextStyles = useAnimatedStyle(() => ({
    display: animatedPosition.value >= 0.5 ? "flex" : "none",
    opacity: interpolate(animatedPosition.value, [0, 0.8, 1], [0, 0, 1]),
    marginHorizontal: interpolate(
      animatedPosition.value,
      [0, 0.8, 1],
      [0, 0, 6],
      Extrapolation.CLAMP
    ),
  }));

  const animatedTempConditionStyles = useAnimatedStyle(() => ({
    flexDirection: animatedPosition.value > 0.5 ? "row" : "column",
    opacity: interpolate(animatedPosition.value, [0, 0.5, 1], [1, 0, 1]),
  }));

  const animatedConditionTextStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedPosition.value,
          [0, 0.5, 1],
          [0, -10, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Animated.Text style={styles.cityText}>{city}</Animated.Text>

      <Animated.View
        style={[styles.tempConditionView, animatedTempConditionStyles]}
      >
        <Animated.View style={styles.tempSeparatorView}>
          <Animated.Text
            style={[styles.temperatureText, animatedTempTextStyles]}
          >
            {temperature}
            {DEGREE_SYMBOL}
          </Animated.Text>
          <Animated.Text
            style={[styles.separatorText, animatedSeparatorTextStyles]}
          >
            {SEPARATOR_SYMBOL}
          </Animated.Text>
        </Animated.View>
        <Animated.Text
          style={[styles.conditionText, animatedConditionTextStyles]}
        >
          {condition}
        </Animated.Text>
      </Animated.View>

      <Animated.Text style={[styles.minMaxText, animatedMinMaxTextStyles]}>
        {`H: ${high}${DEGREE_SYMBOL} L :${low} ${DEGREE_SYMBOL}`}
      </Animated.Text>
    </Animated.View>
  );
};
