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
import { Widgets } from "../Widgets/Widgets";
import { ScrollView } from "react-native-gesture-handler";

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

  const smallWidgetSize = width / 2 - 15 * 2;

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
        <ScrollView
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
        >
          <ForecastScroll
            forecastList={
              selectedForecastType === ForecastType.Hourly ? hourly : weekly
            }
            capsuleRadius={capsuleRadius}
            capsuleHeight={capsuleHeight}
            capsuleWidth={capsuleWidth}
          />
          <Widgets smallWidgetSize={smallWidgetSize} parentWidth={width} />
        </ScrollView>
      </>
    </BottomSheet>
  );
};
