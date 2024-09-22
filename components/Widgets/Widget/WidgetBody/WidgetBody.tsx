import { Text, View } from "react-native";
import { styles } from "./styles";

export type WidgetBodyPropsType = {
  children?: React.ReactNode;
  contentText?: string;
  subContentText?: string;
  contentSize?: "Normal" | "Large";
};

export const WidgetBody = ({
  children,
  contentText,
  contentSize = "Normal",
  subContentText,
}: WidgetBodyPropsType) => {
  return (
    <View style={styles.container}>
      {contentText && (
        <Text
          style={
            contentSize === "Normal"
              ? styles.contentText
              : styles.largeContentText
          }
        >
          {contentText}
        </Text>
      )}
      {subContentText && (
        <Text style={styles.subContentText}>{subContentText}</Text>
      )}
      {children}
    </View>
  );
};
