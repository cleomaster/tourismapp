import React from 'react';
import { ImageBackground, View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';

function AboutPage(props) {
    return (
      <ImageBackground source={require("../assets/backgroundImage.png")} style={styles.container}>
      <AppText style={{color: "white", marginBottom: 20, fontWeight: "bold"}} size={30}>Group Members</AppText>
        <View style={styles.profile}>
            <Image style={styles.profilePic} source={require("../assets/nabil.jpg")} />
            <AppText style={styles.profileText} size={25}>Nabil</AppText>
            <AppText style={styles.profileText} size={25}>FA20-BSE-009</AppText>
        </View>
        <View style={styles.profile}>
            <Image style={styles.profilePic} source={require("../assets/sadat.jpg")} />
            <AppText style={styles.profileText} size={25}>Sadat</AppText>
            <AppText style={styles.profileText} size={25}>FA20-BSE-011</AppText>
        </View>
        <View style={styles.profile}>
            <Image style={styles.profilePic} source={require("../assets/shah.jpeg")} />
            <AppText style={styles.profileText} size={25}>Shah Mohsin</AppText>
            <AppText style={styles.profileText} size={25}>FA20-BSE-009</AppText>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    profile: {
        alignItems: "center",
        marginVertical: 15
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 75
    },
    profileText: {
        color: "white",
        // fontWeight: "bold"
    }
})

export default AboutPage;