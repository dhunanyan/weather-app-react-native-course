import * as React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { View, Text, Pressable, LayoutChangeEvent } from "react-native";
import { Canvas, Line, LinearGradient, vec } from "@shopify/react-native-skia";

import { ForecastType } from "@models";
import { COLORS } from "@config";
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

  const { Line: line, LinearGradient: gradient } =
    COLORS.ForecastSheet.ForecastControl;

  const spacingX = 32;

  const segmentTranslateX = useSharedValue(0);
  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);
  const animatedSegmentLineStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: segmentTranslateX.value }],
  }));

  const onForecastPress = (type: ForecastType) => {
    if (type === ForecastType.Hourly) {
      segmentTranslateX.value = withTiming(0, { duration: 300 });
    }

    if (type === ForecastType.Weekly) {
      segmentTranslateX.value = withTiming(width - textWidth - spacingX * 2, {
        duration: 300,
      });
    }

    selectForecastType(type);
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => onForecastPress(ForecastType.Hourly)}>
          <Text
            onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
            style={styles.forecastText}
          >
            Hourly Forecast
          </Text>
        </Pressable>
        <Pressable onPress={() => onForecastPress(ForecastType.Weekly)}>
          <Text style={styles.forecastText}>Weekly Forecast</Text>
        </Pressable>
      </View>
      <AnimatedCanvas
        style={[
          animatedSegmentLineStyles,
          {
            width: width - 2 * spacingX,
            height: line["strokeWidth"],
            marginHorizontal: spacingX,
          },
        ]}
      >
        <Line
          p1={vec(0, 2)}
          p2={vec(textWidth, 2)}
          strokeWidth={line["strokeWidth"]}
        >
          <LinearGradient
            start={vec(0, 0)}
            end={vec(textWidth, 0)}
            colors={[gradient["0%"], gradient["100%"], gradient["0%"]]}
          />
        </Line>
      </AnimatedCanvas>
    </>
  );
};
