import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from './../constants/colors';
import { registerUser } from '../services/users';


function RegisterScreen({ navigation, route }) {

    const { longitude, latitude } = route.params;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    return (
      <ImageBackground source={require("../assets/cool-background.png")} style={styles.container}>
        <View style={styles.form}>
            <AppText size={35} style={styles.formText}>Register</AppText>
            <TextInput style={styles.textInput} value={email} onChangeText={(text) => setEmail(text)} placeholder="Email" />
            <TextInput style={styles.textInput} value={password} onChangeText={(text) => setPassword(text)} placeholder="Password" />
            <View style={styles.formButton}>
            <AppButton
            onPress={() => {
            registerUser(email, password)
            Alert.alert("Successfully registered");
            navigation.navigate("LoginScreen", {longitude, latitude});
            }
            }
             title="Register" bgColor={colors.white} txtColor="black" />
            </View>
            <AppText size={20} style={styles.textP}>OR</AppText>
            <TouchableOpacity
            onPress={() =>
            navigation.navigate("LoginScreen", {longitude, latitude})
            }
            >
            <AppText size={20} style={styles.textButton}>Login</AppText>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 80
    },
    textInput: {
        marginVertical: 10,
        backgroundColor: colors.white,
        width: "100%",
        color: "black",
        padding: 8,
        borderRadius: 20,
        fontSize: 15,
        fontWeight: "bold"
    },
    formText: {
        color: colors.white,
        fontWeight: "bold",
        marginBottom: 30,
    },
    formButton: {
        width: "100%",
        marginTop: 30
    },
    textP: {
        marginVertical: 10
    },
    textButton: {
        color: colors.blue200,
        fontWeight: "bold",
        textDecorationLine: 'underline'
    }
})

export default RegisterScreen;