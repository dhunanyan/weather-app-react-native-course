import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  canvas: {
    ...StyleSheet.absoluteFillObject,
  },
  contentView: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  temperatureText: {
    fontSize: 64,
    lineHeight: 64,
    fontFamily: "SF-Regular",
    color: "white",
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 160,
    ...StyleSheet.absoluteFillObject,
    top: -30,
  },
  highLowText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "SF-Regular",
    color: "rgba(235, 235, 245, 0.6)",
  },
  weatherLocationView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  locationText: {
    fontSize: 17,
    lineHeight: 17,
    fontFamily: "SF-Regular",
    color: "white",
  },
  weatherText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "SF-Regular",
    color: "white",
  },
});
