import React, { useState } from 'react';
import { DiceBox } from '../dice';
import ResultLabel from '../resultLabel'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


var arr = [], arrResult = []

function DiceRenderContainer ({ arrayOfDices, resultString }) {
	//INDEXES => DB_0~25 DiceBox

	const [disableButton, setDisableButton] = useState()
	
	let colorState = 'green'
	
	if(disableButton) colorState = 'grey'
	else colorState = 'green'

	if (arr.length < 20) {
		if(arrayOfDices[0] !== undefined) {
			arr.push(arrayOfDices[0])
			arrResult.push(arrayOfDices[0][2])
		}
	}else{
		if(!disableButton){	setDisableButton(true) } // Para evitar loop infinito no state durante o loading
	}
	
	return (
		<>
			<View style={styles.mainContainer}>
				<View style={styles.container}>
					{
						arr.map((item, index) => {
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
				<ResultLabel
					arrResult={arrResult}
					resultString={resultString}
					colorState={colorState}
				/>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		width: '98%',
		height: '65%',
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
})

export function calculate (resultString, array) {
	if (array[0] !== undefined) {
		array.map(
			(item, index) => { 
				if(index + 1 != array.length ) {
					resultString += `${item} + `
				} else { 
					resultString += `${item} = ${array.reduce(
						(prevVal, elem) => Number.parseInt(prevVal) + Number.parseInt(elem), 0
					)}`
				}
			}
		)
	}
	return resultString;
}

export default DiceRenderContainer;
