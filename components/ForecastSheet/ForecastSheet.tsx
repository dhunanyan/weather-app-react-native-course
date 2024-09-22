import * as React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import BottomSheet from "@gorhom/bottom-sheet";
import { ForecastSheetBackground } from "./ForecastSheetBackground";
import { ForecastControl } from "./ForecastControl";
import { ForecastScroll } from "./ForecastScroll";
import { Separator } from "./Separator";
import { Widgets } from "../Widgets/Widgets";

import { useApplicationDimensions } from "@hooks";
import { useForecastSheetPosition } from "@context";
import { ForecastType } from "@models";
import { hourly, weekly } from "@data";

import { styles } from "./styles";

export const ForecastSheet = () => {
  const [selectedForecastType, selectForecastType] =
    React.useState<ForecastType>(ForecastType.Hourly);
  const { width, height } = useApplicationDimensions();

  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;
  const smallWidgetSize = width / 2 - 15 * 2;

  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const secondSnapPoint = height * (parseFloat(snapPoints[1]) / 100);
  const minY = height - secondSnapPoint;
  const maxY = height - firstSnapPoint;

  const currentPosition = useSharedValue(0);
  const animatedPosition = useForecastSheetPosition();

  const translateXHourly = useSharedValue(0);
  const translateXWeekly = useSharedValue(width);

  const animatedHourlyStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateXHourly.value }],
  }));
  const animatedWeeklyStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateXWeekly.value }],
  }));

  React.useEffect(() => {
    if (selectedForecastType === ForecastType.Hourly) {
      translateXHourly.value = withTiming(0, { duration: 300 });
      translateXWeekly.value = withTiming(width, { duration: 300 });
    }

    if (selectedForecastType === ForecastType.Weekly) {
      translateXHourly.value = withTiming(-width, { duration: 300 });
      translateXWeekly.value = withTiming(-width, { duration: 300 });
    }
  }, [selectedForecastType, translateXHourly, translateXWeekly, width]);

  const normalizePosition = (position: number) => {
    "worklet";
    return ((position - maxY) / (maxY - minY)) * -1;
  };

  useAnimatedReaction(
    () => currentPosition.value,
    (cv) => {
      animatedPosition.value = normalizePosition(cv);
    }
  );

  return (
    <BottomSheet
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.indicatorStyle}
      animatedPosition={currentPosition}
      animateOnMount={false}
      backgroundComponent={() => (
        <ForecastSheetBackground
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <>
        <ForecastControl selectForecastType={selectForecastType} />
        <Separator width={width} height={3} />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 5 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.forecastScrollsView}>
            <Animated.View style={[animatedHourlyStyles]}>
              <ForecastScroll
                forecastList={hourly}
                capsuleRadius={capsuleRadius}
                capsuleHeight={capsuleHeight}
                capsuleWidth={capsuleWidth}
              />
            </Animated.View>
            <Animated.View style={[animatedWeeklyStyles]}>
              <ForecastScroll
                forecastList={weekly}
                capsuleRadius={capsuleRadius}
                capsuleHeight={capsuleHeight}
                capsuleWidth={capsuleWidth}
              />
            </Animated.View>
          </View>
          <Widgets smallWidgetSize={smallWidgetSize} parentWidth={width} />
        </ScrollView>
      </>
    </BottomSheet>
  );
};
