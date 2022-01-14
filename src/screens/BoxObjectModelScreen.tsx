import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BoxObjectModelScreen() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
    },
    title:{
        marginHorizontal: 20,
        fontSize: 20,
        paddingHorizontal: 100,
        borderWidth: 10,
        //width: 250
    }
})
