import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SmallDiceBox, DiceBox } from './components/dice';
import { SetDicesContainer } from './components/setDicesContainer'
import { Ionicons } from '@expo/vector-icons';
import { DiceRenderContainer } from './components/diceRenderContainer';


export default function App() {
  const [diceRender, setDiceRender] = useState([]);
  var newData = []
  
  return (
    <>
      <View style={styles.container}>
        <SetDicesContainer 
          callbackArray= {(child) => {
            // console.log('sem desconstructuring: ', child)
            // console.log('com desconstructuring: ', {child})
            setDiceRender(child);
        }}/>
        <DiceRenderContainer 
          arrayOfDices={
            newData = newData === [] ? 'teste' : diceRender
          }/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    paddingTop: 20,
  },
});
