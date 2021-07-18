import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SmallDiceBox, DiceBox } from './components/dice';
import { SetDicesContainer } from './components/setDicesContainer'
import { Ionicons } from '@expo/vector-icons';
import { DiceRenderContainer } from './components/diceRenderContainer';

export default function App() {
  const [comunidades, setComunidades] = React.useState([]);
  
  return (
    <>
      <View style={styles.container}>
        <SetDicesContainer />
        <DiceRenderContainer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
  },
});