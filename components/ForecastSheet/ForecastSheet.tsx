import * as React from "react";
import { useApplicationDimensions } from "@hooks";

import BottomSheet from "@gorhom/bottom-sheet";
import { ForecastSheetBackground } from "./ForecastSheetBackground";
import { ForecastControl } from "./ForecastControl";
import { ForecastScroll } from "./ForecastScroll";
import { Separator } from "./Separator";

import { ForecastType } from "@models";
import { hourly, weekly } from "@data";

import { styles } from "./styles";

export const ForecastSheet = () => {
  const [selectedForecastType, selectForecastType] =
    React.useState<ForecastType>(ForecastType.Hourly);

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
        <ForecastControl
          width={width}
          selectedForecastType={selectedForecastType}
          selectForecastType={selectForecastType}
        />
        <Separator width={width} height={3} />
        <ForecastScroll
          forecastList={
            selectedForecastType === ForecastType.Hourly ? hourly : weekly
          }
          capsuleRadius={capsuleRadius}
          capsuleHeight={capsuleHeight}
          capsuleWidth={capsuleWidth}
        />
      </>
    </BottomSheet>
  );
};
