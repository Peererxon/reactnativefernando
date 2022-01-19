import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const TareaScreen = ()=> {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada }></View>
        <View style={ styles.cajaNaranja }></View>
        <View style={ styles.cajaAzul }></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#28425B',
      flex: 1,
  },
  cajaMorada: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: 'purple'
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    flex: 0.9,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'orange',
  },
  cajaAzul:{
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'blue'
  }
});
