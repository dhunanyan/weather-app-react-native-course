import { StyleProp, Text, View, ViewStyle } from "react-native";
import { IconComponentPropsType } from "../Widget";

import { styles } from "./styles";

export type WidgetFooterPropsType = {
  borderTopWidth?: number;
  borderTopColor?: string;
  paddingTop?: number;
  contentText: string;
  Icon?: React.ElementType<any>;
  iconProps?: IconComponentPropsType;
  style?: StyleProp<ViewStyle>;
};

export const WidgetFooter = ({
  Icon,
  iconProps,
  contentText,
  borderTopWidth = 0.5,
  borderTopColor = "rgba(0,0,0,0.2)",
  paddingTop = 10,
  style,
}: WidgetFooterPropsType) => {
  const finalProps = {
    ...iconProps,
    color: iconProps?.color || "white",
    size: iconProps?.size || 24,
  };
  return (
    <View
      style={[
        styles.container,
        style,
        {
          borderTopWidth,
          borderTopColor,
          paddingTop,
        },
      ]}
    >
      <Text style={styles.text}>{contentText}</Text>
      {Icon && <Icon {...finalProps} />}
    </View>
  );
};
