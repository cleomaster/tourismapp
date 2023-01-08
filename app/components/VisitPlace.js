import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from './../constants/colors';


export default function VisitPlace({ imagePath, name, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={imagePath} />
        <AppText style={styles.text} size={12}>{name}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 13
  },
  container: {
    alignItems: "center",
    marginRight: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
