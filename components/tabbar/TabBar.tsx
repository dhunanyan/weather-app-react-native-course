import * as React from "react";
import { BlurView } from "expo-blur";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { TabBarItems } from "./TabBarItems";
import { ArcComponent } from "./ArcComponent";

import { useApplicationDimensions } from "@hooks";
import { useForecastSheetPosition } from "@context";
import { Extrapolate } from "@shopify/react-native-skia";

import { styling } from "./styles";

export const TabBar = () => {
  const tabBarHeight = 88;
  const dimensions = useApplicationDimensions();
  const { width } = dimensions;

  const styles = styling(dimensions, tabBarHeight);

  const animatedPosition = useForecastSheetPosition();
  const animatedViewStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedPosition.value,
          [0, 1],
          [0, tabBarHeight + 20],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedViewStyles]}>
      <BlurView intensity={50} tint={"dark"} style={styles.blurView}>
        <ArcComponent height={tabBarHeight} width={width} />
        <TabBarItems />
      </BlurView>
    </Animated.View>
  );
};
