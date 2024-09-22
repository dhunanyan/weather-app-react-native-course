import * as React from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import {
  Canvas,
  LinearGradient,
  Path,
  RoundedRect,
  vec,
} from "@shopify/react-native-skia";

import { useForecastSheetPosition } from "@context";
import { COLORS } from "@config";

import { styles } from "./styles";
import { useApplicationDimensions } from "@hooks";

export type ForecastSheetBackgroundPropsType = {
  height: number;
  cornerRadius: number;
};

export const ForecastSheetBackground = ({
  height,
  cornerRadius,
}: ForecastSheetBackgroundPropsType) => {
  const { width } = useApplicationDimensions();

  const { BackgroundGradient, LinePath, LinePathGradient } =
    COLORS.ForecastSheet;
  const borderPath = `
    M 0 ${cornerRadius} 
    A ${cornerRadius} ${cornerRadius} 0 0 1 ${cornerRadius} 0 
    H ${width - cornerRadius} 
    A ${cornerRadius} ${cornerRadius} 0 0 1 ${width} ${cornerRadius}
  `;

  const animatedPosition = useForecastSheetPosition();
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
  const blurViewStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animatedPosition.value,
      [0, 0.5],
      ["transparent", "#422e5a"]
    ),
  }));

  return (
    <AnimatedBlurView
      intensity={50}
      tint={"dark"}
      style={[styles.container, blurViewStyles, { borderRadius: cornerRadius }]}
    >
      <Canvas style={styles.canvas}>
        <RoundedRect x={0} y={0} width={width} height={height} r={cornerRadius}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={[BackgroundGradient["0%"], BackgroundGradient["100%"]]}
            positions={[-0.04, 0.95]}
          />
        </RoundedRect>

        <Path
          path={borderPath}
          style={LinePath["style"]}
          strokeWidth={LinePath["strokeWidth"]}
          color={LinePath["color"]}
        >
          <LinearGradient
            start={vec(width / 2, 0)}
            end={vec(width / 2, cornerRadius)}
            colors={[LinePathGradient["0%"], LinePathGradient["100%"]]}
          />
        </Path>
      </Canvas>
    </AnimatedBlurView>
  );
};
