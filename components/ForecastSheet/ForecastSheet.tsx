import * as React from "react";
import { useApplicationDimensions } from "@hooks";

import BottomSheet from "@gorhom/bottom-sheet";
import { ForecastSheetBackground } from "./ForecastSheetBackground";
import { ForecastControl } from "./ForecastControl";
import { Separator } from "./Separator";

import { styles } from "./styles";
import { ForecastCapsule } from "./ForecastCapsule";
import { hourly } from "@data";

export const ForecastSheet = () => {
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;

  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;

  return (
    <BottomSheet
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.indicatorStyle}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <>
        <ForecastControl />
        <Separator width={width} height={3} />
        <ForecastCapsule
          width={capsuleWidth}
          height={capsuleHeight}
          radius={capsuleRadius}
          forecast={hourly[0]}
        />
      </>
    </BottomSheet>
  );
};
