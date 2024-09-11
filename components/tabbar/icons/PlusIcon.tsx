import * as React from "react";
import { Line, vec } from "@shopify/react-native-skia";
import { COLORS } from "@config";

export type PlusIconPropsType = {
  radius: number;
};

export const PlusIcon = ({ radius }: PlusIconPropsType) => {
  const { Plus: plus } = COLORS.TabBar.TabBarItems.CircleButton;

  return (
    <>
      <Line
        p1={vec(radius - radius / 3, radius)}
        p2={vec(radius + radius / 3, radius)}
        style={plus["style"]}
        strokeCap={plus["strokeCap"]}
        strokeWidth={plus["strokeWidth"]}
        color={plus["color"]}
      />
      <Line
        p1={vec(radius, radius - radius / 3)}
        p2={vec(radius, radius + radius / 3)}
        style={plus["style"]}
        strokeCap={plus["strokeCap"]}
        strokeWidth={plus["strokeWidth"]}
        color={plus["color"]}
      />
    </>
  );
};
