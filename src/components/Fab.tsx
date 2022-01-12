import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native'

interface Props {
    title:string,
    position?: 'br' | 'bl'
    onPress: ()=> void,
}

export default function Fab( { title, onPress, position = 'br' }: Props ) {
    console.log(title);

    const ios = ()=>{
        return (
            <TouchableOpacity 
                activeOpacity={ 0.75 }
                style={[
                    styles.fabLocation,
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
                onPress={ ()=> onPress() }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>{ title }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = ()=>{
        return (
            <View 
                style={[
                    styles.fabLocation,
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ ()=> onPress() }
                    background={ TouchableNativeFeedback.Ripple( 'lightgray',false, 30 ) }
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }>{ title }</Text>
                    </View>
                </TouchableNativeFeedback>
    
            </View>
        )
    }
    
    return (Platform.OS === 'ios') ? ios() : android()

}


const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left:{
        left: 25
    },
    fab:{
        backgroundColor: '#5856D6',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 1,
        width: 60,
        height: 60,
        borderRadius:100,
        justifyContent:'center'
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        alignSelf: 'center',
    }
})
