import * as React from "react";
import { View, Text, Pressable, LayoutChangeEvent } from "react-native";
import { styles } from "./styles";
import { Canvas, Line, LinearGradient, vec } from "@shopify/react-native-skia";
import { COLORS } from "@config";

export const ForecastControl = () => {
  const [textWidth, setTextWidth] = React.useState(0);
  const { Line: line, LinearGradient: gradient } =
    COLORS.ForecastSheet.ForecastControl;

  const handleLayout = (event: LayoutChangeEvent) => {
    setTextWidth(event.nativeEvent.layout.width);
  };

  const spacingX = 32;

  return (
    <>
      <View style={styles.container}>
        <Pressable>
          <Text onLayout={handleLayout} style={styles.forecastText}>
            Hourly Forecast
          </Text>
        </Pressable>
        <Pressable>
          <Text style={styles.forecastText}>Weekly Forecast</Text>
        </Pressable>
      </View>

      <Canvas
        style={{
          height: line["strokeWidth"],
          width: textWidth,
          marginLeft: spacingX,
        }}
      >
        <Line
          p1={vec(0, 0)}
          p2={vec(textWidth, 0)}
          strokeWidth={line["strokeWidth"]}
        >
          <LinearGradient
            start={vec(0, 0)}
            end={vec(textWidth, 0)}
            colors={[gradient["0%"], gradient["100%"], gradient["0%"]]}
          />
        </Line>
      </Canvas>
    </>
  );
};
