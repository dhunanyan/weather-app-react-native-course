import * as React from "react";
import { BlurView } from "expo-blur";

import { useApplicationDimensions } from "@hooks";
import { ArcComponent, TabBarItems } from "../elements";

import { styling } from "./styles";

export const WeatherTabBar = () => {
  const tabBarHeight = 88;
  const dimensions = useApplicationDimensions();
  const { width } = dimensions;

  const styles = styling(dimensions, tabBarHeight);

  return (
    <BlurView intensity={50} tint={"dark"} style={styles.container}>
      <ArcComponent height={tabBarHeight} width={width} />
      <TabBarItems />
    </BlurView>
  );
};
