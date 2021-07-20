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
var arr = []

export function DiceRenderContainer ({ arrayOfDices }) {
	//INDEXES => DB_0~25 DiceBox

	const [disableButton, setDisableButton] = useState()
	
	let colorState = 'green'
	//console.log(`ANTES: arr => ${arr}, arrayOfDices=> ${arrayOfDices}`)
	
	if (arr.length < 21) //Para limitar a quantidade de dados renderizados na box
	arr.push(arrayOfDices)
	else{
		if(!disableButton){	setDisableButton(true) } // Para evitar loop infinito no state durante o loading
	} 


	console.log(`DEPOIS: arr => ${arr}, arrayOfDices=> ${arrayOfDices}`)
	
	
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
								return	<DiceBox diceType={item} key={`DB_${index}`}/>								
						})
					}
				</View>
				<View style={styles.container}>
					<Text style={{position: 'absolute', top: -5, fontWeight: 700, fontSize: 15}}>RESULTADO</Text>
					<TouchableOpacity style={styles.playButton}>
						<FontAwesome name="play-circle-o" size={35} color={colorState} />
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
		border: '5px solid black',
		borderRadius: '10px',
		justifyContent: 'space-between',
	},
	container : {
		display: 'flex-box',
		flexDirection: 'row',
		flexFlow: 'wrap',
		padding: 10,
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 600,
	},
	playButton: {
		position: 'absolute',
		top: -12,
		left: 305,
	}
})