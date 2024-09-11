import * as React from "react";
import { useApplicationDimensions } from "@hooks";

import BottomSheet from "@gorhom/bottom-sheet";
import { ForecastSheetBackground } from "./ForecastSheetBackground";
import { ForecastControl } from "./ForecastControl";

import { styles } from "./styles";

export const ForecastSheet = () => {
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;

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
      </>
    </BottomSheet>
  );
};
