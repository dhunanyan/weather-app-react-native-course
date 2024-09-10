import * as React from "react";
import { View } from "react-native";

import { useApplicationDimensions } from "@hooks";

import { ListIcon, MapIcon } from "../../icons";
import { TrapezoidBackground } from "../TrapezoidBackground";
import { CircleButton } from "../CircleButton";

import { styles } from "./styles";

export const TabBarItems = () => {
  const { width, height } = useApplicationDimensions();
  const trapezoidWidth = width * 0.68;
  const trapezoidHeight = height * 0.12;
  const circleRadius = (trapezoidWidth * 0.22) / 2;

  return (
    <View style={styles.container}>
      <MapIcon />
      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
      <CircleButton radius={circleRadius} />
      <ListIcon />
    </View>
  );
};
