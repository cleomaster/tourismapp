import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { GOOGLE_API_KEY } from "./../constants/config";
import MapViewDirections from "react-native-maps-directions";
import colors from "./../constants/colors";
import AppText from "../components/AppText";
import { Marker } from "react-native-maps";
import { getDistance } from "geolib";
import AppButton from "../components/AppButton";

export default function PlaceScreen({ navigation, route }) {
  const { userLatitude, userLongitude, selectedPlace } = route.params;
  const [distance, setDistance] = useState(0);

  const getDistancePoints = () => {
    const result = getDistance(
      {
        latitude: userLatitude,
        longitude: userLongitude,
      },
      {
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
      }
    );
    setDistance(result / 1000);
  };

  useEffect(() => {
    getDistancePoints();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0.05,
          }}
          style={styles.map}
        >
          <Marker
            key={1}
            coordinate={{
              latitude: selectedPlace.latitude,
              longitude: selectedPlace.longitude,
            }}
            title="Your Destination"
            description={selectedPlace.shortDescription}
          />
          <Marker
            key={2}
            coordinate={{ latitude: userLatitude, longitude: userLongitude }}
            title="Your Current Location"
            description="Your current Location"
          />
          <MapViewDirections
            apikey={GOOGLE_API_KEY}
            origin={{ latitude: userLatitude, longitude: userLongitude }}
            destination={{
              latitude: selectedPlace.latitude,
              longitude: selectedPlace.longitude,
            }}
            strokeWidth={5}
            strokeColor="red"
          />
        </MapView>
      </View>
      <ScrollView style={styles.infoContainer}>
        <View style={styles.distanceInfo}>
          <AppText style={{ fontWeight: "bold", color: colors.blue100 }}>
            Distance
          </AppText>
          <AppText style={{ fontWeight: "bold" }}>{distance} Km</AppText>
        </View>
        <AppText style={styles.placeNameText} size={35}>
          {selectedPlace.name}
        </AppText>
        <AppText style={styles.placeShortDescriptionText} size={18}>
          {selectedPlace.shortDescription}
        </AppText>
        <AppText size={18}>{selectedPlace.longDescription}</AppText>
      </ScrollView>
      <TouchableOpacity onPress={() => {
        navigation.navigate("BookScreen", selectedPlace)
      }}>
        <ImageBackground
          source={require("../assets/backgroundImage.png")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue100,
    padding: 15,
    alignItems: "center",
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    borderRadius: 30,
    marginHorizontal: 20,
    overflow: "hidden",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
  },
  placeShortDescriptionText: {
    marginBottom: 30,
  },
  distanceInfo: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 50,
    overflow: "hidden",
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  placeNameText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
