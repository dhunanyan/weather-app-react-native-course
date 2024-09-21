import * as React from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";

export type ForecastSheetProviderPropsType = {
  children: React.ReactNode;
};

export const ForecastSheetContext =
  React.createContext<SharedValue<number> | null>(null);

export const ForecastSheetProvider = ({
  children,
}: ForecastSheetProviderPropsType) => {
  const animatedPosition = useSharedValue(0);

  return (
    <ForecastSheetContext.Provider value={animatedPosition}>
      {children}
    </ForecastSheetContext.Provider>
  );
};

export const useForecastSheetPosition = (): SharedValue<number> => {
  const context = React.useContext(ForecastSheetContext);
  if (context === null) {
    throw new Error(
      "useForecastSheetPosition must be used within a Forecast Sheet Provider"
    );
  }

  return context;
};
