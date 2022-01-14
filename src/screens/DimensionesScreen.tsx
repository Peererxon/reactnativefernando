import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
//estatico
//const { width,height } = Dimensions.get('window')

export default function DimensionesScreen() {
    //se actualiza
    const { width, height  } = useWindowDimensions()
    return (
        <View style={ styles.container }>
            <View style={
                {
                    ...styles.cajaNaranj,
                    width: width * 0.4,
                    height: height * 0.32
                }}
            >
            </View>

            <View style={ styles.cajaMorada }>
            </View>

            <Text style={ styles.title }>
                W: { width } H { height }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:400
    },
    cajaMorada: {
        backgroundColor: 'purple',
        width: '50%',
        height: '50%'
    },
    cajaNaranj:{
        backgroundColor: 'orange'
    },
    title: {
        fontSize: 30
    }
})

