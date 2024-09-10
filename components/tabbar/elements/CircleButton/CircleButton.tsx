import * as React from "react";
import {
  Canvas,
  Circle,
  Line,
  LinearGradient,
  Shadow,
  vec,
} from "@shopify/react-native-skia";

import { COLORS } from "@config";
import { styling } from "./styles";

export type CircleButtonPropsType = {
  radius: number;
};

export const CircleButton = ({ radius }: CircleButtonPropsType) => {
  const diameter = radius * 2;
  const styles = styling(diameter, diameter);
  const {
    LinearGradient: gradient,
    Shadow: shadow,
    Plus: plus,
  } = COLORS.TabBar.TabBarItems.CircleButton;

  return (
    <Canvas style={styles.container}>
      <Circle cx={radius} cy={radius} r={radius}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(diameter, diameter)}
          colors={[gradient["0%"], gradient["100%"]]}
        />
        <Shadow
          dx={1}
          dy={1}
          blur={shadow["blur"]}
          color={shadow["color"]}
          inner
        />
      </Circle>

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
    </Canvas>
  );
};
