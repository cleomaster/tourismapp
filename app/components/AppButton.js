import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/colors'


export default function AppButton({ containerStyle, onPress, title, bgColor, txtColor=colors.blue100}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, {backgroundColor: bgColor}, containerStyle]}>
            <Text style={[styles.buttonText, {color: txtColor}]}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.blue100
    },
    buttonText: {
        color: colors.blue100,
        fontSize: 20,
        fontWeight: "bold"
    }
})