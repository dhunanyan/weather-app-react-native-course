import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  goBackPressable: {
    marginRight: 5,
  },
  titleText: {
    color: "white",
    fontFamily: "SF-Semibold",
    fontSize: 28,
    lineHeight: 34,
  },
  optionsPressable: {
    marginLeft: "auto",
  },
});
