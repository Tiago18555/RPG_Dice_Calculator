import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SetDicesContainer } from './components/setDicesContainer'
import DiceRenderContainer from './components/diceRenderContainer';
import { ResultLabel } from './components/resultLabel'


export default function App() {
  const [diceRender, setDiceRender] = useState([]);
  // const [resetApp, setResetApp] = useState();
  var newData = []
  var resultString = '';
  
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
          }
          resultString={resultString}
          />
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
