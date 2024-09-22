import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { Widget, WidgetHeader, WidgetBody, WidgetFooter } from "../Widget";
import { DEGREE_SYMBOL } from "@config";

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
      <WidgetHeader
        contentText="Feels Like"
        Icon={FontAwesome5}
        iconProps={{ name: "temperature-high" }}
      />
      <WidgetBody contentText={`19${DEGREE_SYMBOL}`} contentSize="Large" />
      <WidgetFooter contentText="Similar to the actual temperature." />
    </Widget>
  );
};
