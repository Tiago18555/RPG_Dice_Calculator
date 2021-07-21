import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import { DiceBox } from '../dice';
import { addDice } from '../../App'

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
var arr = [], arrResult = []
var resultString = '';

export function DiceRenderContainer ({ arrayOfDices }) {
	//INDEXES => DB_0~25 DiceBox

	const [disableButton, setDisableButton] = useState()
	
	let colorState = 'green'
	
	if (arr.length < 21) {
		if(arrayOfDices[0] !== undefined) {
			arr.push(arrayOfDices[0])
			arrResult.push(arrayOfDices[0][2])
			// console.log(arrResult)
		}
	}else{
		if(!disableButton){	setDisableButton(true) } // Para evitar loop infinito no state durante o loading
	}
	
	
	if(disableButton) colorState = 'grey'
	else colorState = 'green'

	
	return (
		<>
			<View style={styles.mainContainer}>
				<View style={styles.container}>
					{
						arr.map((item, index) => {
							//console.log(index, index !== 0)
							if(index !== 0) //Para não renderizar o primeiro dado da array							
								return	(
									<DiceBox 
										diceType={item[1]} 
										textColor={item[0]} 
										key={`DB_${index}`}
									/>
								)								
						})
					}
				</View>
				<View style={styles.container}>
					<Text 
						style={{
							position: 'absolute', 
							top: -5, 
							fontWeight: "700", 
							fontSize: 15
						}}
					>
						RESULTADO: {resultString}
					</Text>
					<TouchableOpacity 
						style={styles.playButton}
						onPress={calculate.bind(this, [arrResult])} 
						onPress={setDisableButton.bind(this, [true])}
					>
						<FontAwesome 
							name="play-circle-o" 
							size={35} 
							color={colorState} 
						/>
					</TouchableOpacity>
				</View>		
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		width: '98%',
		height: 400,
		margin: '1%',
		padding: 10,
		backgroundColor: '#ddd',
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 5,
		borderRadius: 10,
		justifyContent: 'space-between',
	},
	container : {
		display: 'flex',
		flexDirection: 'row',
		flexWrap:'wrap',
		padding: 10,
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: "600",
	},
	playButton: {
		position: 'absolute',
		top: -12,
		left: 295,
	}
})

function calculate (...params) {
	params[0][0].map(
		(item, index) => { 
			if(index + 1 != params[0][0].length ) {
				resultString += `${item} + `
			} else { 
				resultString += `${item} = ${params[0][0].reduce(
					(prevVal, elem) => Number.parseInt(prevVal) + Number.parseInt(elem), 0
				)}`
			}
		}
	)
}
