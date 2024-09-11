import { COLORS } from "@config";
import { useApplicationDimensions } from "@hooks";
import { Canvas, Line, Shadow, vec } from "@shopify/react-native-skia";
import * as React from "react";

export type SeparatorPropsType = {
  width: number;
  height: number;
};

export const Separator = ({ width, height }: SeparatorPropsType) => {
  const {} = useApplicationDimensions();
  const { Line: line, Shadow: shadow } = COLORS.ForecastSheet.Separator;

  return (
    <Canvas style={{ width, height }}>
      <Line
        p1={vec(0, 0)}
        p2={vec(width, 0)}
        color={line["color"]}
        strokeWidth={height}
      />
      <Shadow dx={0} dy={0} blur={shadow["blur"]} color={shadow["color"]} />
    </Canvas>
  );
};
