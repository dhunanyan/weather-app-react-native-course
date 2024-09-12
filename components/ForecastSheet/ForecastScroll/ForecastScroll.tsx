import * as React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ForecastCapsule } from "../ForecastCapsule";

import { Forecast } from "@models";
import { hourly } from "@data";
import { styles } from "./styles";

export type ForecastScrollPropsType = {
  forecastHourlyList: Forecast[];
  capsuleWidth: number;
  capsuleHeight: number;
  capsuleRadius: number;
};

export const ForecastScroll = ({
  forecastHourlyList,
  capsuleWidth,
  capsuleHeight,
  capsuleRadius,
}: ForecastScrollPropsType) => {
  return (
    <ScrollView
      style={styles.scrollView}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.view}>
        {forecastHourlyList.map((forecast, index) => (
          <ForecastCapsule
            key={index}
            width={capsuleWidth}
            height={capsuleHeight}
            radius={capsuleRadius}
            forecast={forecast}
          />
        ))}
      </View>
    </ScrollView>
  );
};
