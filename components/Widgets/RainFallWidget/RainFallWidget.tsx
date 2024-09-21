import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Widget } from "../Widget/Widget";

export type RainFallWidgetPropsType = {
  width: number;
  height: number;
};

export const RainFallWidget = ({ width, height }: RainFallWidgetPropsType) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        contentText="Rainfall"
        Icon={FontAwesome5}
        iconProps={{ name: "cloud-rain" }}
      />
      <Widget.Body
        contentText="1.8 mm"
        contentSize="Large"
        subContentText="in last hour"
      ></Widget.Body>
      <Widget.Footer contentText="1.2 mm expected in next 24 hours." />
    </Widget>
  );
};
