import * as React from "react";
import { BlurView } from "expo-blur";

import { useApplicationDimensions } from "@hooks";
import { TabBarItems } from "./TabBarItems";
import { ArcComponent } from "./ArcComponent";

import { styling } from "./styles";

export const TabBar = () => {
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
