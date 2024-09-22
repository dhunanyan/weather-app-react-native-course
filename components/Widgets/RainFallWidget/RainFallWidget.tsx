import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Widget, WidgetHeader, WidgetBody, WidgetFooter } from "../Widget";

export type RainFallWidgetPropsType = {
  width: number;
  height: number;
};

export const RainFallWidget = ({ width, height }: RainFallWidgetPropsType) => {
  return (
    <Widget width={width} height={height}>
      <WidgetHeader
        contentText="Rainfall"
        Icon={FontAwesome5}
        iconProps={{ name: "cloud-rain" }}
      />
      <WidgetBody
        contentText="1.8 mm"
        contentSize="Large"
        subContentText="in last hour"
      />
      <WidgetFooter contentText="1.2 mm expected in next 24 hours." />
    </Widget>
  );
};
