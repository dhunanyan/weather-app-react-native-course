import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Widget, WidgetHeader, WidgetBody, WidgetFooter } from "../Widget";

export type HumidityWidgetPropsType = {
  width: number;
  height: number;
};

export const HumidityWidget = ({ width, height }: HumidityWidgetPropsType) => {
  return (
    <Widget width={width} height={height}>
      <WidgetHeader
        contentText="Humidity"
        Icon={MaterialCommunityIcons}
        iconProps={{ name: "water" }}
      />
      <WidgetBody contentText="90%" contentSize="Large" />
      <WidgetFooter contentText="The dew point is 17 right now." />
    </Widget>
  );
};
