import * as React from "react";
import { Canvas, Line, Shadow, vec } from "@shopify/react-native-skia";

import { COLORS } from "@config";

export type SeparatorPropsType = {
  width: number;
  height: number;
};

export const Separator = ({ width, height }: SeparatorPropsType) => {
  const { Line: line, Shadow: shadow } = COLORS.ForecastSheet.Separator;

  return (
    <Canvas style={{ width, height }}>
      <Line
        p1={vec(0, 0)}
        p2={vec(width, 0)}
        color={line["color"]}
        strokeWidth={1}
      />
      <Shadow dx={0} dy={0} blur={shadow["blur"]} color={shadow["color"]} />
    </Canvas>
  );
};
