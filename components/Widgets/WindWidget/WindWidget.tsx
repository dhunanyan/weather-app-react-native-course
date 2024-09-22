import * as React from "react";
import { View } from "react-native";

import { Feather, Fontisto } from "@expo/vector-icons";
import { Widget, WidgetHeader, WidgetBody } from "../Widget";

export type WinWidgetPropsType = {
  width: number;
  height: number;
};

export const WindWidget = ({ width, height }: WinWidgetPropsType) => {
  return (
    <Widget width={width} height={height}>
      <WidgetHeader
        contentText="Wind"
        Icon={Feather}
        iconProps={{ name: "wind" }}
      />
      <WidgetBody>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fontisto name="compass-alt" size={100} color="white" />
        </View>
      </WidgetBody>
    </Widget>
  );
};
