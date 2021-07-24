import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SetDicesContainer } from './components/setDicesContainer'
import DiceRenderContainer from './components/diceRenderContainer';

var arrayOfDices = [];
var resultString = '';

export default function App() {
  const [diceRender, setDiceRender] = useState([]);

  const diceKit = [
    {child: 'D4', color: '#7AFA85'}, 
    {child: 'D6', color: '#E3CE64'}, 
    {child: 'D8', color: '#FF9D7D'}, 
    {child: 'D10', color: '#DA85FF'}, 
    {child: 'D20', color: '#7FBEEB'}, 
    {child: 'D100', color: 'white'}
  ]

  const reset = () => {
    resultString = ''
    arrayOfDices = []
    setDiceRender([])
  }
  
  return (
    <>
      <View style={styles.container}>
        <SetDicesContainer 
          callbackArray={setDiceRender.bind(this, [arrayOfDices])}
          diceKit={diceKit}
          arrayOfDices={arrayOfDices}
        />
        {/* {console.log('=> ', arrayOfDices)} */}
        <DiceRenderContainer 
          arrayOfDices={arrayOfDices}
          resultString={resultString}
          setDiceRender={setDiceRender}
          reset={reset}
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

