import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SmallDiceBox } from '../dice';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

var allDices = [];

export function SetDicesContainer ({ diceType }) {
	const [text, setText] = useState('');
	//const [dice, setDice] = useState([allDices]);

	return (
		<>
			<View style={styles.mainContainer}>
				<Text style={styles.title}>ADICIONE DADOS OU VALOR FIXO</Text>
				<View style={styles.container}>	
					{
						['D4', 'D6', 'D8', 'D10', 'D20', 'D100'].map((type) => 
							<>
								<SmallDiceBox 
									onPress={
										allDices.push( (type) => {
											const setDice = {
												'D4': {value: 4},
												'D6': {value: 6},
												'D8': {value: 8},
												'D10': {value: 10},
												'D20': {value: 20},
												'D100': {value: 100},
											}
											min = Math.ceil(1);
											max = Math.floor(setDice[type].value);
											Math.floor(Math.random() * (setDice[type].value - 1 + 1)) + min;
										})
									}
									diceType={type} 
									key={type}
								/>
							</>							
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
						onPress={allDices.push( text )}
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

// function calculate(arrayValues) {
// 	arrayValues.map();
// }