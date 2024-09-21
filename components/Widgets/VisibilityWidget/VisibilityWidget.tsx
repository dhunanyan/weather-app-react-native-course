import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Widget } from "../Widget";

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
      <Widget.Header
        contentText="Rainfall"
        Icon={MaterialIcons}
        iconProps={{ name: "visibility" }}
      />
      <Widget.Body contentText="8 km" contentSize="Large"></Widget.Body>
      <Widget.Footer contentText="Great visibility." />
    </Widget>
  );
};
