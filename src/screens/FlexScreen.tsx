import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function FlexScreen() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.caja1 }>caja 1 </Text>
            <Text style={ styles.caja2 } >caja 2 </Text>
            <Text style={ styles.caja3 }>caja 3 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'lightblue',
/*         flexDirection: 'row',
        justifyContent: 'space-around' */
    },
    caja1:{
        //flex: 3, // 3 + 2 + 1 = 6
        //width: 100,
        //alignSelf:'center',
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2:{
        //flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3:{
        //flex:1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    }
})
