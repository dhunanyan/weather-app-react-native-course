import * as React from "react";

import {
  Canvas,
  Circle,
  LinearGradient,
  Shadow,
  vec,
} from "@shopify/react-native-skia";

export type CircleButtonPropsType = {
  radius: number;
};

export const CircleButton = ({ radius }: CircleButtonPropsType) => {
  const diameter = radius * 2;
  //TODO: MAKE VARS OUT OF MAGIC NUMBERS AND COLOR CODES

  return (
    <Canvas style={{ width: diameter, height: diameter }}>
      <Circle cx={radius} cy={radius} r={radius}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(diameter, diameter)}
          colors={["#f5f5f9", "#dadfe7"]}
        />
        <Shadow dx={1} dy={1} blur={0.5} color={"white"} inner />
      </Circle>
    </Canvas>
  );
};
