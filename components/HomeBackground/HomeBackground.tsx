import * as React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { COLORS, IMAGES } from "@config";

export const HomeBackground = () => {
  const { width, height } = useWindowDimensions();
  const {
    Home: { BackgroundGradient },
  } = COLORS;

  return (
    <>
      {Platform.OS !== "web" && (
        <Canvas style={{ flex: 1 }}>
          <Rect x={0} y={0} width={width} height={height}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, height)}
              colors={[BackgroundGradient["0%"], BackgroundGradient["100%"]]}
            />
          </Rect>
        </Canvas>
      )}

      <ImageBackground
        source={IMAGES.home.background}
        resizeMode="cover"
        style={{ height: "100%", position: "relative" }}
      >
        <Image
          source={IMAGES.home.house}
          resizeMode="contain"
          style={{ width, height, ...StyleSheet.absoluteFillObject, top: 304 }}
        />
      </ImageBackground>
    </>
  );
};
