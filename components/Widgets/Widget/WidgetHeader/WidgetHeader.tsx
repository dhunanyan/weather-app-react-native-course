import { StyleProp, Text, View, ViewProps, ViewStyle } from "react-native";
import { IconComponentPropsType } from "../Widget";
import { styles } from "./styles";

export type WidgetHeaderPropsType = {
  contentText: string;
  Icon: React.ElementType<any>;
  iconProps: IconComponentPropsType;
  style?: StyleProp<ViewStyle>;
} & ViewProps;

export const WidgetHeader = ({
  Icon,
  iconProps,
  contentText,
  style,
}: WidgetHeaderPropsType) => {
  const finalProps = {
    ...iconProps,
    color: iconProps.color || "rgba(235,235,245,0.6)",
    size: iconProps.size || 24,
  };
  return (
    <View style={[styles.container, style]}>
      <Icon {...finalProps} />
      <Text style={styles.text}>{contentText.toUpperCase()}</Text>
    </View>
  );
};
