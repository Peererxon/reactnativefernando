import React from 'react'
import { SafeAreaView } from 'react-native'
//import FlexScreen from './src/screens/FlexScreen'
import { TareaScreen } from './src/screens/TareaScreen'
//import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'
//import DimensionesScreen from './src/screens/DimensionesScreen'
//import PositionScreen from './src/screens/PositionScreen'

export default function App() {
  return (
    <SafeAreaView
      style={
        {
          flex: 1,
          backgroundColor: '#28425B'
        }
      }
    >
      <TareaScreen />

    </SafeAreaView>
  )
}
