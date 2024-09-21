import * as React from "react";
import { View } from "react-native";

import { AirQualityWidget } from "./AirQualityWidget";
import { UvIndexWidget } from "./UvIndexWidget";
import { WindWidget } from "./WindWidget";
import { SunriseWidget } from "./SunriseWidget";
import { RainFallWidget } from "./RainFallWidget";
import { FeelsLikeWidget } from "./FeelsLikeWidget";
import { HumidityWidget } from "./HumidityWidget";
import { VisibilityWidget } from "./VisibilityWidget";
import { PressureWidget } from "./PressureWidget";

import { styles } from "./styles";

export type WidgetsPropsType = {
  smallWidgetSize: number;
  parentWidth: number;
};

export const Widgets = ({ smallWidgetSize, parentWidth }: WidgetsPropsType) => {
  return (
    <View style={styles.widgetContainer}>
      <AirQualityWidget width={parentWidth - 10 * 2} height={150} />
      <View style={styles.squareWidgetContainer}>
        <UvIndexWidget
          width={parentWidth / 2 - 10 * 2}
          height={smallWidgetSize}
        />
        <WindWidget width={parentWidth / 2 - 10 * 2} height={smallWidgetSize} />
        <SunriseWidget
          width={parentWidth / 2 - 10 * 2}
          height={smallWidgetSize}
        />
        <RainFallWidget
          width={parentWidth / 2 - 10 * 2}
          height={smallWidgetSize}
        />
        <FeelsLikeWidget
          width={parentWidth / 2 - 10 * 2}
          height={smallWidgetSize}
        />
        <HumidityWidget
          width={parentWidth / 2 - 10 * 2}
          height={smallWidgetSize}
        />
        <VisibilityWidget
          width={parentWidth / 2 - 10 * 2}
          height={smallWidgetSize}
        />
        <PressureWidget
          width={parentWidth / 2 - 10 * 2}
          height={smallWidgetSize}
        />
      </View>
    </View>
  );
};
