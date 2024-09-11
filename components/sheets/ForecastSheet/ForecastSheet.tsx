import BottomSheet from "@gorhom/bottom-sheet";
import * as React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { ForecastSheetBackground } from "../../ForecastSheetBackground";
import { useApplicationDimensions } from "@hooks";

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
    ></BottomSheet>
  );
};
