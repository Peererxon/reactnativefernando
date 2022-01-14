import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PositionScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaVerde }></View>
            <View style={ styles.cajaMorada }></View>
            <View style={ styles.cajaNaranja }></View>
        </View>
    )
}

export default PositionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 8,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right:0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 8,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right:0
    },
    cajaVerde: {
/*         width: 100,
        height: 100, */
        backgroundColor: 'green',
        borderWidth: 8,
        borderColor: 'white',
        /* position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0 */
        //Esto es lo mismo que absoluto y todo en 0 es un shortcut
        ...StyleSheet.absoluteFillObject
    }
})

