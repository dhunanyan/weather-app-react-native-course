import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Widget, WidgetDimensionsProps } from "../Widget/Widget";

export type HumidityWidgetPropsType = {
  width: number;
  height: number;
};

export const HumidityWidget = ({ width, height }: HumidityWidgetPropsType) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        contentText="Humidity"
        Icon={MaterialCommunityIcons}
        iconProps={{ name: "water" }}
      />
      <Widget.Body contentText="90%" contentSize="Large"></Widget.Body>
      <Widget.Footer contentText="The dew point is 17 right now." />
    </Widget>
  );
};
