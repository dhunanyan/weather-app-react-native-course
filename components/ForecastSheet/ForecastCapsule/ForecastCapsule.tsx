import * as React from "react";
import { Image, Text, View } from "react-native";
import { Canvas, RoundedRect, Shadow } from "@shopify/react-native-skia";

import { Forecast as ForecastModel, ForecastType } from "@models";
import { COLORS } from "@config";
import {
  getCurrentDisplayText,
  DEGREE_SYMBOL,
  PROBABILITY_SYMBOL,
} from "@utils";

import { styling } from "./styles";

export type ForecastCapsulePropsType = {
  forecast: ForecastModel;
  width: number;
  height: number;
  radius: number;
};

export const ForecastCapsule = ({
  forecast,
  width,
  height,
  radius,
}: ForecastCapsulePropsType) => {
  const { date, icon, probability, temperature, type } = forecast;
  const [textToDisplay, isActive] = getCurrentDisplayText(type, date);

  const styles = styling(width, height);
  const {
    RoundedRect: roundedRect,
    Shadow1: shadow1,
    Shadow2: shadow2,
  } = COLORS.ForecastSheet.ForecastCapsule;

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <RoundedRect
          x={0}
          y={0}
          width={width}
          height={height}
          r={radius}
          color={isActive ? roundedRect["activeColor"] : roundedRect["color"]}
        >
          <Shadow
            dx={1}
            dy={1}
            blur={shadow1["blur"]}
            color={shadow1["color"]}
            inner
          />
          <Shadow
            dx={5}
            dy={4}
            blur={shadow2["blur"]}
            color={shadow2["color"]}
            inner
          />
        </RoundedRect>
      </Canvas>

      <View style={styles.content}>
        <Text style={styles.time}>{textToDisplay}</Text>
        <View style={styles.probabilityContainer}>
          <Image source={icon} style={styles.image} />
          <Text
            style={[styles.probability, { opacity: probability > 0 ? 1 : 0 }]}
          >
            {probability}
            {PROBABILITY_SYMBOL}
          </Text>
        </View>
        <Text style={styles.temperature}>
          {temperature}
          {DEGREE_SYMBOL}
        </Text>
      </View>
    </View>
  );
};
