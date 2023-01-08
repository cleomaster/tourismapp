import React, { useEffect, useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import * as Location from 'expo-location';
import { Video } from 'expo-av';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../constants/colors';



export default function LoginScreen({ navigation }) {

  const [long, setLongitude] = useState();
  const [lat, setLatitude] = useState();

  const getLocation = async () => {
    let { coords } = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = coords;
    setLongitude(longitude);
    setLatitude(latitude);
}
   

  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
    })();
    getLocation();
}, []);




    return (
        <View style={styles.container}> 
  
        <Video
        source={require("../assets/backgroundvideo.mp4")}
        style={styles.backgroundVideo}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        volume={0}
        muted={true}
        resizeMode="cover"
        />
  
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
  
          
          <View style={styles.containerInside}>
            <View style={styles.textMargin}>
            <AppText style={styles.textHeading}>Travel is an Investment in Yourself.</AppText>
            </View>
            <View style={styles.buttonMargin}>
                  <AppButton bgColor={colors.white} title="Get Started" onPress={() => {  
                    navigation.navigate("LoginScreen", { latitude: lat, longitude: long })
                   }} />
            </View>
          </View>
  
        </KeyboardAvoidingView>
        </View>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  textMargin: {
    paddingTop: 50
  },
  buttonMargin: {
    marginTop: 200,
  },
  containerInside: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textHeading: {
      textAlign: "center",
      fontSize: 45,
      fontWeight: "bold",
      textShadowColor: colors.white,
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:10,
  }
});