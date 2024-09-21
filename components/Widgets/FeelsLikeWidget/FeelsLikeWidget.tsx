import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { Widget } from "../Widget";
import { DEGREE_SYMBOL } from "@utils";

export type FeelsLikeWidgetPropsType = {
  width: number;
  height: number;
};

export const FeelsLikeWidget = ({
  width,
  height,
}: FeelsLikeWidgetPropsType) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        contentText="Feels Like"
        Icon={FontAwesome5}
        iconProps={{ name: "temperature-high" }}
      />
      <Widget.Body
        contentText={`19${DEGREE_SYMBOL}`}
        contentSize="Large"
      ></Widget.Body>
      <Widget.Footer contentText="Similar to the actual temperature." />
    </Widget>
  );
};
