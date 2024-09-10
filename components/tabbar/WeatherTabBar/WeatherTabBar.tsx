import * as React from "react";
import { View } from "react-native";

import { useApplicationDimensions } from "@hooks";
import { ArcComponent, TabBarItems } from "../elements";

import { styling } from "./styles";

export const WeatherTabBar = () => {
  const tabBarHeight = 88;
  const dimensions = useApplicationDimensions();
  const { width } = dimensions;

  const styles = styling(dimensions, tabBarHeight);

  return (
    <View style={styles.container}>
      <ArcComponent height={tabBarHeight} width={width} />
      <TabBarItems />
    </View>
  );
};
