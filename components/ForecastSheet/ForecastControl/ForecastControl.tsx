import * as React from "react";
import { View, Text, Pressable, LayoutChangeEvent } from "react-native";
import { styles } from "./styles";
import { Canvas, Line, LinearGradient, vec } from "@shopify/react-native-skia";
import { COLORS } from "@config";
import { ForecastType } from "@models";
import { useSharedValue } from "react-native-reanimated";

export type ForecastControlPropsType = {
  width: number;
  selectedForecastType: ForecastType;
  selectForecastType: (forecastType: ForecastType) => void;
};

export const ForecastControl = ({
  width,
  selectedForecastType,
  selectForecastType,
}: ForecastControlPropsType) => {
  const [textHourlyWidth, setTextHourlyWidth] = React.useState(0);
  const [textWeeklyWidth, sextWeeklyWidth] = React.useState(0);

  const { Line: line, LinearGradient: gradient } =
    COLORS.ForecastSheet.ForecastControl;

  const handleWeeklyLayout = (event: LayoutChangeEvent) => {
    sextWeeklyWidth(event.nativeEvent.layout.width);
  };
  const handleHourlyLayout = (event: LayoutChangeEvent) => {
    setTextHourlyWidth(event.nativeEvent.layout.width);
  };

  const spacingX = 32;

  const p1x =
    selectedForecastType === ForecastType.Hourly
      ? 0
      : width - spacingX * 2 - textWeeklyWidth;
  const p2x =
    selectedForecastType === ForecastType.Hourly
      ? textHourlyWidth
      : width - spacingX * 2;

  const segmentTranslateX = useSharedValue(0);

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => selectForecastType(ForecastType.Hourly)}>
          <Text onLayout={handleWeeklyLayout} style={styles.forecastText}>
            Hourly Forecast
          </Text>
        </Pressable>
        <Pressable onPress={() => selectForecastType(ForecastType.Weekly)}>
          <Text onLayout={handleHourlyLayout} style={styles.forecastText}>
            Weekly Forecast
          </Text>
        </Pressable>
      </View>

      <Canvas
        style={{
          width: width - 2 * spacingX,
          height: line["strokeWidth"],
          marginHorizontal: spacingX,
        }}
      >
        <Line
          p1={vec(p1x, 2)}
          p2={vec(p2x, 2)}
          strokeWidth={line["strokeWidth"]}
        >
          <LinearGradient
            start={vec(p1x, 0)}
            end={vec(p2x, 0)}
            colors={[gradient["0%"], gradient["100%"], gradient["0%"]]}
          />
        </Line>
      </Canvas>
    </>
  );
};
