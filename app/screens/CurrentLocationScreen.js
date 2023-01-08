import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import AppButton from "../components/AppButton";
import colors from "../constants/colors";

export default function CurrentLocationScreen({ navigation, route }) {
  const { longitude, latitude } = route.params;
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0,
          longitudeDelta: 0.05,
        }}
        style={styles.map}
      >
        <Marker
          key={1}
          coordinate={{ latitude: latitude, longitude: longitude }}
          title="Current location"
          description="My location"
        />
      </MapView>
      <View style={styles.container}>
        <View style={styles.containerInside}>
          <AppButton
            bgColor={colors.white}
            txtColor={colors.blue100}
            title="Confirm Location"
            onPress={() => {
              navigation.navigate("HomeScreen", {
                latitude, longitude
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInside: {
    marginTop: 600,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
