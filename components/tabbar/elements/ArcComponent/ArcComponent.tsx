import * as React from "react";
import { ScaledSize } from "react-native";

import { Canvas, LinearGradient, Path, vec } from "@shopify/react-native-skia";
import { COLORS } from "@config";

import { styling } from "./styles";

export type ArcComponentPropsType = {
  width: ScaledSize["width"];
  height: ScaledSize["height"];
};

export const ArcComponent = ({ height, width }: ArcComponentPropsType) => {
  const styles = styling(height);
  const arcPath = `
      M 0 0 
      Q ${width / 2} ${height / 2} ${width} 0 
      L ${width} ${height}
      L ${0} ${height}
      Z
  `;
  const arcBorder = `
      M 0 0 
      Q ${width / 2} ${height / 2} ${width} 0 
  `;
  const { ArcPathGradient, ArcBorder } = COLORS.TabBar.ArcComponent;

  return (
    <Canvas style={styles.canvas}>
      <Path path={arcPath}>
        <LinearGradient
          start={vec(width / 2, 0)}
          end={vec(width / 2, height)}
          colors={[ArcPathGradient["0%"], ArcPathGradient["100%"]]}
        />
      </Path>

      <Path
        path={arcBorder}
        style={ArcBorder["style"]}
        strokeWidth={ArcBorder["strokeWidth"]}
      />
    </Canvas>
  );
};
