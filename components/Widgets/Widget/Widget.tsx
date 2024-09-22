import * as React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import { styles } from "./styles";

export type IconComponentPropsType = {
  name: string;
  size?: number;
  color?: string;
};

type WidgetProps = {
  style?: StyleProp<ViewStyle>;
  width?: number | `${number}%`;
  height: number | `${number}%`;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  padding?: number;
  children: React.ReactNode;
} & ViewProps;

export const Widget = ({
  children,
  style,
  width,
  height,
  borderRadius = 22,
  borderWidth = 0.25,
  borderColor = "#E0D9FF",
  backgroundColor = "#201C48",
  padding = 15,
}: WidgetProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
          borderWidth,
          borderColor,
          backgroundColor,
          padding,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
