import * as React from "react";
import {
  Canvas,
  Circle,
  Line,
  LinearGradient,
  Paint,
  vec,
} from "@shopify/react-native-skia";
import { Feather } from "@expo/vector-icons";
import { Widget, WidgetHeader, WidgetBody } from "../Widget";

export type UvIndexWidgetPropsType = {
  width: number;
  height: number;
};

export const UvIndexWidget = ({ width, height }: UvIndexWidgetPropsType) => {
  return (
    <>
      <Widget width={width} height={height}>
        <WidgetHeader
          Icon={Feather}
          iconProps={{ name: "sun" }}
          contentText="UV INDEX"
        />
        <WidgetBody
          contentText="4"
          contentSize="Large"
          subContentText="Moderate"
        >
          <Canvas style={{ height: 10, marginTop: 30, flex: 1 }}>
            <Line
              p1={vec(0, 0)}
              p2={vec(width, 0)}
              strokeWidth={10}
              style={"stroke"}
            >
              <LinearGradient
                start={vec(0, 0)}
                end={vec(width, 0)}
                colors={["#2a59b7", "#f92e9b"]}
              />
            </Line>

            <Circle
              cx={3}
              cy={3}
              r={3}
              color={"white"}
              transform={[{ translateX: 20 }]}
            >
              <Paint color="white" />
              <Paint color="black" style="stroke" strokeWidth={1} />
            </Circle>
          </Canvas>
        </WidgetBody>
      </Widget>
    </>
  );
};
