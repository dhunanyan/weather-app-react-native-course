import * as React from "react";
import {
  Canvas,
  Circle,
  LinearGradient,
  Shadow,
  vec,
} from "@shopify/react-native-skia";
import { PlusIcon } from "../icons";

import { COLORS } from "@config";
import { styling } from "./styles";

export type CircleButtonPropsType = {
  radius: number;
  pressed: boolean;
};

export const CircleButton = ({ radius, pressed }: CircleButtonPropsType) => {
  const diameter = radius * 2;
  const styles = styling(diameter, diameter);
  const {
    LinearGradient: { whenPressed, whenNotPressed },
    Shadow: shadow,
  } = COLORS.TabBar.TabBarItems.CircleButton;

  return (
    <Canvas style={styles.container}>
      <Circle cx={radius} cy={radius} r={radius}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(diameter, diameter)}
          colors={
            pressed
              ? [whenPressed["0%"], whenPressed["100%"]]
              : [whenNotPressed["0%"], whenNotPressed["100%"]]
          }
        />
        <Shadow
          dx={1}
          dy={1}
          blur={shadow["blur"]}
          color={shadow["color"]}
          inner
        />
      </Circle>

      <PlusIcon radius={radius} />
    </Canvas>
  );
};
