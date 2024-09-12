import * as React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ForecastCapsule } from "../ForecastCapsule";

import { Forecast } from "@models";
import { styles } from "./styles";

export type ForecastScrollPropsType = {
  forecastList: Forecast[];
  capsuleWidth: number;
  capsuleHeight: number;
  capsuleRadius: number;
};

export const ForecastScroll = ({
  forecastList,
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
        {forecastList.map((forecast, index) => (
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
