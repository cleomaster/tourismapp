import React, { useState} from 'react';
import { View, StyleSheet, ImageBackground, TextInput, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../constants/colors';
import { bookNow } from "../services/bookings";

function BookScreen({ route }) {

    const { name } = route.params;

    const [place, setPlace] = useState(name);
    const [phone, setPhone] = useState('');
    const [participants, setParticipants] = useState('');

    return (
      <ImageBackground style={styles.container} source={require('../assets/cool-background.png')}>
        <View style={styles.form}>
        <AppText size={35} style={styles.formText}>Book a trip!</AppText>
            <TextInput editable={false} style={styles.textInput} value={place} onChangeText={(text) => setPlace(text)} placeholder="Place" />
            <TextInput style={styles.textInput} value={phone}  onChangeText={(text) => setPhone(text)} placeholder="Phone number" />
            <TextInput style={styles.textInput} value={participants}  onChangeText={(text) => setParticipants(text)} placeholder="No. of participants" />
            <View style={styles.formButton}>
            <AppButton
            onPress={() => {
                bookNow(place, phone, participants);
                Alert.alert("Booked!");
            }}
             title="Book" bgColor={colors.white} txtColor="black" />
            </View>
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

export default BookScreen;