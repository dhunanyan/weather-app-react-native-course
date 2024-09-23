import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { WeatherWidget } from "./WeatherWidget/WeatherWidget";

import { forecastList } from "@data";
import { styles } from "./styles";

export const WeatherWidgets = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.innerContainer}
      showsVerticalScrollIndicator={false}
    >
      {forecastList.map((forecast, i) => (
        <WeatherWidget forecast={forecast} key={i} />
      ))}
    </ScrollView>
  );
};
