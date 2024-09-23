import * as React from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "expo-router";

import { TrapezoidBackground } from "../TrapezoidBackground";
import { CircleButton } from "../CircleButton";
import { ListIcon, MapIcon } from "../icons";

import { useApplicationDimensions } from "@hooks";
import { eventEmitter } from "@utils";

import { styling } from "./styles";

export const TabBarItems = () => {
  const navigation = useNavigation<AppNavigationProps>();
  const { width, height } = useApplicationDimensions();

  const trapezoidWidth = width * 0.68;
  const trapezoidHeight = height * 0.12;
  const circleRadius = (trapezoidHeight * 0.51) / 2;
  const buttonCenterX = width / 2 - circleRadius;

  const styles = styling(buttonCenterX, circleRadius);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => eventEmitter.emit("locationEvent")}>
        <MapIcon />
      </Pressable>
      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />

      <Pressable style={styles.pessable}>
        {({ pressed }) => (
          <CircleButton radius={circleRadius} pressed={pressed} />
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate("list")}>
        <ListIcon />
      </Pressable>
    </View>
  );
};
