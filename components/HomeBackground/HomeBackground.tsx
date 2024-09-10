import * as React from "react";
import { Image, ImageBackground, Platform, View } from "react-native";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";

import { useApplicationDimensions } from "@hooks";
import { COLORS, IMAGES } from "@config";
import { styling } from "./styles";

export const HomeBackground = () => {
  const dimensions = useApplicationDimensions();
  const { width, height } = dimensions;
  const smokeHeight = height * 0.6;
  const smokeOffset = height * 0.4;
  const styles = styling(dimensions, smokeHeight, smokeOffset);

  const {
    Home: { BackgroundGradient, SmokeGradient },
  } = COLORS;

  return (
    <View style={styles.container}>
      {Platform.OS !== "web" && (
        <Canvas style={styles.backgroundCanvas}>
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
        style={styles.imageBackground}
      >
        {Platform.OS !== "web" && (
          <Canvas style={styles.smokeCanvas}>
            <Rect x={0} y={0} width={width} height={height}>
              <LinearGradient
                start={vec(width / 2, 0)}
                end={vec(width / 2, smokeHeight)}
                colors={[SmokeGradient["0%"], SmokeGradient["100%"]]}
                positions={[0.02, 0.54]}
              />
            </Rect>
          </Canvas>
        )}
        <Image
          source={IMAGES.home.house}
          resizeMode="cover"
          style={styles.image}
        />
      </ImageBackground>
    </View>
  );
};
