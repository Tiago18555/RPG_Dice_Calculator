import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { StaticDiceBox } from '../dice';
import { Ionicons } from '@expo/vector-icons';

var getRandomDices;

export function SetDicesContainer ({ callbackArray }) {
	const [text, setText] = useState('');
	const [arrayOfDices, setArrayOfDices] = React.useState([]);

	return (
		<>
			<View style={styles.mainContainer}>
				<Text style={styles.title}>ADICIONE DADOS OU VALOR FIXO</Text>
				<View style={styles.container} onPress={generateRandomDiceValue()}>	
					{
						['D4', 'D6', 'D8', 'D10', 'D20', 'D100'].map((type) => 
							<TouchableOpacity 
								onPress={
									setArrayOfDices.bind(
										this, [ getRandomDices[type].value ]
									),
									callbackArray.bind(this, getRandomDices[type].value)
								}
							>
								<StaticDiceBox 
									diceType={type}
									key={type}
								/>
							</TouchableOpacity>							
						)
					}
				</View>
				<View style={styles.container}>
					<Text style={{fontSize: 15, fontWeight: 600}}>FIXO: </Text>
					<TextInput 
						style={{width: '80%', border: '1px solid grey', height: 30}} 
						onChangeText={text => setText(text)}
						defaultValue={text}
					/>
					<Ionicons 
						name="add-circle-sharp"
						size={30} 
						color="black" 
						onPress={
							setArrayOfDices.bind(this, [text])
						}
						onPress={
							callbackArray.bind(this, arrayOfDices)
						}
					/>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		width: '98%',
		height: 200,
		margin: '1%',
		padding: 10,
		backgroundColor: '#ddd',
		border: '5px solid black',
		borderRadius: '10px',
		justifyContent: 'space-between',
	},
	container : {
		display: 'flex',
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'space-between',	
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 600,
	}
})

function random(min, max) {
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDiceValue () {
    const setDice = {
        'D4': {value: random(1, 4)},
        'D6': {value: random(1, 6)},
        'D8': {value: random(1, 8)},
        'D10': {value: random(1, 10)},
        'D20': {value: random(1, 20)},
        'D100': {value: random(1, 100)},
    }
	getRandomDices = setDice;
}
