import * as React from "react";
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import {
  Canvas,
  LinearGradient,
  RoundedRect,
  Shadow,
  vec,
} from "@shopify/react-native-skia";
import { useApplicationDimensions } from "@hooks";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

export const WeatherListHeader = () => {
  const { width } = useApplicationDimensions();
  const { top: statusBarOffset } = useSafeAreaInsets();
  const navigation = useNavigation<AppNavigationProps>();

  return (
    <View style={[styles.container, { paddingTop: statusBarOffset }]}>
      <View style={styles.headerView}>
        <Pressable
          style={styles.goBackPressable}
          onPress={() => navigation.navigate("home")}
        >
          <Ionicons
            name="chevron-back-sharp"
            size={24}
            color={"rgba(235, 235, 245, 0.6)"}
          />
        </Pressable>
        <Text style={styles.titleText}>Weather</Text>
        <Pressable onPress={() => {}} style={styles.optionsPressable}>
          <Ionicons
            name="ellipsis-horizontal-circle"
            size={28}
            color={"rgba(235, 235, 245, 0.6)"}
          />
        </Pressable>
      </View>

      <View style={styles.search}>
        <Canvas style={{ ...StyleSheet.absoluteFillObject }}>
          <RoundedRect x={0} y={0} width={width - 30} height={36} r={10}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width - 32, 36)}
              colors={["rgba(46, 41, 90, 0.26)", "rgba(28, 27, 51, 0.26)"]}
            />
            <Shadow dx={0} dy={0} blur={1} color={"rgba(0, 0, 0, 1)"} />
          </RoundedRect>
        </Canvas>

        <View style={styles.textInputContainer}>
          <Ionicons
            name="search"
            size={17}
            color={"rgba(235, 235, 245, 0.6)"}
          />
          <TextInput
            placeholder={"Search for a city or airport"}
            placeholderTextColor={"rgba(235, 235, 245, 0.6)"}
            style={styles.textInput}
          />
        </View>
      </View>
    </View>
  );
};
