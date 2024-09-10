import * as React from "react";
import { Pressable, View } from "react-native";

import { useApplicationDimensions } from "@hooks";

import { ListIcon, MapIcon } from "../../icons";
import { TrapezoidBackground } from "../TrapezoidBackground";
import { CircleButton } from "../CircleButton";

import { styling } from "./styles";

export const TabBarItems = () => {
  const { width, height } = useApplicationDimensions();
  const trapezoidWidth = width * 0.68;
  const trapezoidHeight = height * 0.12;
  const circleRadius = (trapezoidHeight * 0.51) / 2;
  const buttonCenterX = width / 2 - circleRadius;
  const styles = styling(buttonCenterX);

  return (
    <View style={styles.container}>
      <MapIcon />
      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
      <Pressable style={styles.pessable}>
        <CircleButton radius={circleRadius} />
      </Pressable>
      <ListIcon />
    </View>
  );
};
