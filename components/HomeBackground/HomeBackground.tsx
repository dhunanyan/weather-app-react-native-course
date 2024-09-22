import * as React from "react";
import { Image, ImageBackground, Platform, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { useForecastSheetPosition } from "@context";
import { useApplicationDimensions } from "@hooks";
import { COLORS, IMAGES, PLATFORMS } from "@config";

import { styling } from "./styles";
import { BackgroundGradient } from "../BackgroundGradient";

export const HomeBackground = () => {
  const dimensions = useApplicationDimensions();
  const { width, height } = dimensions;
  const smokeHeight = height * 0.6;
  const smokeOffset = height * 0.4;
  const styles = styling(dimensions, smokeHeight, smokeOffset);

  const {
    Home: { SmokeGradient },
  } = COLORS;

  const animatedPosition = useForecastSheetPosition();

  const leftBackgroundColor = useSharedValue("#2e335a");
  const rightBackgroundColor = useSharedValue("#1c1b33");
  const backgroundColors = useDerivedValue(() => {
    if (Platform.OS === PLATFORMS.IOS) {
      leftBackgroundColor.value = interpolateColor(
        animatedPosition.value,
        [0, 1],
        ["#2e335a", "#422e5a"]
      );

      return [leftBackgroundColor.value, rightBackgroundColor.value];
    }

    leftBackgroundColor.value =
      animatedPosition.value > 0.5 ? "422e5a" : "2e335a";

    return [leftBackgroundColor.value, rightBackgroundColor.value];
  });

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  const animatedImageBackgroundStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedPosition.value,
          [0, 1],
          [0, -height],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);
  const animatedCanvasSmokeStyles = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedPosition.value,
      [0, 0.1],
      [1, 0],
      Extrapolation.CLAMP
    ),
  }));

  return (
    <View style={styles.container}>
      <BackgroundGradient colors={backgroundColors} />
      <AnimatedImageBackground
        source={IMAGES.home.background}
        resizeMode="cover"
        style={[styles.imageBackground, animatedImageBackgroundStyles]}
      >
        <AnimatedCanvas style={[styles.smokeCanvas, animatedCanvasSmokeStyles]}>
          <Rect x={0} y={0} width={width} height={height}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={[SmokeGradient["0%"], SmokeGradient["100%"]]}
              positions={[0.02, 0.54]}
            />
          </Rect>
        </AnimatedCanvas>
        <Image
          source={IMAGES.home.house}
          resizeMode="cover"
          style={styles.image}
        />
      </AnimatedImageBackground>
    </View>
  );
};
