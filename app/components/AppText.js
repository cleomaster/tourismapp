import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

export default function AppText({ children, style, size = 20 }) {
  return (
    <Text style={[styles.text, { fontSize: size }, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    color: colors.blue200,
  },
});
