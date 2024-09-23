import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBlockColor: "rgba(255, 255, 255, 0.3)",
  },
  pressablesView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressable: {
    paddingHorizontal: 32,
    paddingVertical: 6,
  },
  forecastText: {
    fontFamily: "SF_Semibold",
    fontSize: 15,
    lineHeight: 20,
  },
});
