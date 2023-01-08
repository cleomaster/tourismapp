import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Button
} from "react-native";
import AppText from "../components/AppText";
import React, { useState } from "react";
import colors from "../constants/colors";
import VisitPlace from "../components/VisitPlace";
import places from './../constants/places';
import { Feather } from '@expo/vector-icons';


export default function HomeScreen({ navigation, route }) {



 
  const { longitude, latitude } = route.params;
  const [selectedPlace, setSelectedPlace] = useState(places[0]);
  
  const renderItem = ({ item }) => {
    return (
      <VisitPlace
      onPress={() => {
      setSelectedPlace(item);
      }}

      imagePath={item.imagePath}
      name={item.name}
    />
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../assets/cool-background.png")}
      >
        <View style={styles.box}>
        <TouchableOpacity onPress={() => {
          navigation.openDrawer();
        }}>
        <Feather name="menu" size={28} color="white" />
        </TouchableOpacity>
          <AppText style={styles.headingText} size={35}>
            Let's discover your destination
          </AppText>
          <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <AppText style={styles.staticText}>Places To Visit</AppText>
          <Feather name="arrow-right" size={18} color="white" />
          </View>
     
            <View style={styles.visitContainer}>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={places} renderItem={renderItem} />
        
            </View>
       
          <View style={styles.selectedImageContainer}>
            <AppText style={styles.textSelected}>Currently selected</AppText>
            <View style={styles.selectedImageInside}>
                <ImageBackground
                  borderRadius={20}
                  style={styles.selectedImageStyle}
                  source={selectedPlace.imagePath}
                >
                  <View style={{padding: 15, backgroundColor: colors.blue200, borderBottomEndRadius: 10, borderBottomLeftRadius: 10 }}>
                    <AppText
                      style={{ color: colors.blue100, fontWeight: "bold" }}
                      size={25}
                    >
                      {selectedPlace.name}
                    </AppText>
                    <TouchableOpacity
                onPress={() => navigation.navigate("PlaceScreen", {userLatitude: latitude, userLongitude: longitude, selectedPlace})}
              >
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <AppText size={15} style={{ width: "80%", color: colors.white }}>
                     {selectedPlace.shortDescription}
                    </AppText>
                    <Feather name="arrow-right" size={25} color="white" />
                    </View>

                    </TouchableOpacity>
                  </View>
                </ImageBackground>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 50,
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
  },
  headingText: {
    fontWeight: "bold",
    color: colors.white,
    width: 300,
  },
  staticText: {
    fontWeight: "bold",
    color: colors.white,
    marginVertical: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  visitContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  selectedImageContainer: {
    marginTop: 30,
  },
  selectedImageInside: {
    marginTop: 10,
    alignItems: "center",
    borderRadius: 30,
  },
  selectedImageStyle: {
    justifyContent: "flex-end",
    width: 380,
    height: 450,
  },
  textSelected: {
    fontWeight: "bold",
    color: colors.white,
  },
});
