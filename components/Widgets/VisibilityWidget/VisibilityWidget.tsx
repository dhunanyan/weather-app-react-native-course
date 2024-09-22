import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Widget, WidgetHeader, WidgetBody, WidgetFooter } from "../Widget";

export type VisibilityWidgetPropsType = {
  width: number;
  height: number;
};

export const VisibilityWidget = ({
  width,
  height,
}: VisibilityWidgetPropsType) => {
  return (
    <Widget width={width} height={height}>
      <WidgetHeader
        contentText="Rainfall"
        Icon={MaterialIcons}
        iconProps={{ name: "visibility" }}
      />
      <WidgetBody contentText="8 km" contentSize="Large" />
      <WidgetFooter contentText="Great visibility." />
    </Widget>
  );
};
