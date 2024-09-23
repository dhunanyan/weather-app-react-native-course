import * as React from "react";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { View, Pressable } from "react-native";
import { Canvas, Line, LinearGradient, vec } from "@shopify/react-native-skia";

import { ForecastType } from "@models";
import { styles } from "./styles";
import { useApplicationDimensions } from "@hooks";

export type ForecastControlPropsType = {
  selectForecastType: (forecastType: ForecastType) => void;
};

export const ForecastControl = ({
  selectForecastType,
}: ForecastControlPropsType) => {
  const [textWidth, setTextWidth] = React.useState<number>(0);
  const { width } = useApplicationDimensions();

  const spacingX = 32;

  const segmentTranslateX = useSharedValue(0);
  const animatedHourlyColor = useSharedValue(1);
  const animatedWeeklyColor = useSharedValue(0);
  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);
  const animatedSegmentLineStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: segmentTranslateX.value }],
  }));
  const animatedHourlyTextStyles = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedHourlyColor.value,
      [0, 1],
      ["rgba(235, 235, 245, 0.6)", "#ffffff"]
    ),
  }));
  const animatedWeeklyTextStyles = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedWeeklyColor.value,
      [0, 1],
      ["rgba(235, 235, 245, 0.6)", "#ffffff"]
    ),
  }));

  const onForecastPress = (type: ForecastType) => {
    if (type === ForecastType.Hourly) {
      segmentTranslateX.value = withTiming(0, {
        duration: 600,
        easing: Easing.elastic(1.25),
      });
      animatedHourlyColor.value = withTiming(1, { duration: 600 });
      animatedWeeklyColor.value = withTiming(0, { duration: 600 });
    }

    if (type === ForecastType.Weekly) {
      segmentTranslateX.value = withTiming(width - textWidth - spacingX * 2, {
        duration: 600,
        easing: Easing.elastic(1.25),
      });
      animatedHourlyColor.value = withTiming(0, { duration: 600 });
      animatedWeeklyColor.value = withTiming(1, { duration: 600 });
    }

    selectForecastType(type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pressablesView}>
        <Pressable
          style={styles.pressable}
          onPress={() => onForecastPress(ForecastType.Hourly)}
        >
          <Animated.Text
            onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
            style={[styles.forecastText, animatedHourlyTextStyles]}
          >
            Hourly Forecast
          </Animated.Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => onForecastPress(ForecastType.Weekly)}
        >
          <Animated.Text
            style={[styles.forecastText, animatedWeeklyTextStyles]}
          >
            Weekly Forecast
          </Animated.Text>
        </Pressable>
      </View>
      <AnimatedCanvas
        style={[
          animatedSegmentLineStyles,
          {
            width: width - 2 * spacingX,
            height: 3,
            marginHorizontal: spacingX,
            top: 2,
          },
        ]}
      >
        <Line p1={vec(0, 0)} p2={vec(textWidth, 0)} strokeWidth={6}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(textWidth, 0)}
            colors={[
              "rgba(209, 167, 174, 0)",
              "rgba(209, 167, 174, 1)",
              "rgba(209, 167, 174, 0)",
            ]}
          />
        </Line>
      </AnimatedCanvas>
    </View>
  );
};
