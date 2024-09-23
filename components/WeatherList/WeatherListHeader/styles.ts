import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    shadowColor: "#000000",
    shadowRadius: 20,
    shadowOpacity: 0.9,
  },
  headerView: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  goBackPressable: {
    marginRight: 5,
  },
  titleText: {
    fontSize: 28,
    lineHeight: 28,
    fontFamily: "SF-Semibold",
    color: "white",
  },
  optionsPressable: {
    marginLeft: "auto",
  },
  search: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 10,
    borderRadius: 10,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    fontSize: 17,
    lineHeight: 17,
    paddingLeft: 10,
    fontFamily: "SF-Regular",
    color: "rgba(235, 235, 245, 0.6)",
  },
});
