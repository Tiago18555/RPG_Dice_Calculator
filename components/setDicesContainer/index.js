import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
} from 'react-native';
import { StaticDiceBox } from '../dice';
import AddFixValueBox from '../addFixValueBox';

//var getRandomDices;

export function SetDicesContainer ({ callbackArray, diceKit, arrayOfDices }) {
	/*
		INDEXES => SDB_0~6 StaticDiceBox, TO_0~6 TouchedOpacity	
	*/

	/*const [arrayOfDices, setArrayOfDices] = useState();*/

	return (
		<>
			<View style={styles.mainContainer}>
				<Text style={styles.title}>ADICIONE DADOS OU VALOR FIXO</Text>
				<View style={styles.container} onPress={generateRandomDiceValue()}>	
					{
						diceKit.map((type, index) => 
							<TouchableOpacity 
								onPress={
									() => {
										if (arrayOfDices.length < 20) {
											arrayOfDices.push([
												type.child, 
												type.color, 
												generateRandomDiceValue()[type.child].value
											])
											//console.log('=>', arrayOfDices)
										}
										// else{
											
										// }
										callbackArray(arrayOfDices)
									}
								}								
								key={`TO_${index}`}
							>
								<StaticDiceBox 
									diceType={type.child}
									textColor={type.color}
									key={`SDB_${index}`}
								/>
							</TouchableOpacity>
						)
					}
				</View>
				<AddFixValueBox 
					arrayOfDices={arrayOfDices}
					callbackArray={callbackArray}
				/>
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
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 5,
		borderRadius: 10,
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
		fontWeight: "600",
	}
})

function random(min, max) {
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDiceValue () {
    return {
        'D4': {color: '#7AFA85', value: random(1, 4)},
        'D6': {color: '#E3CE64', value: random(1, 6)},
        'D8': {color: '#FF9D7D', value: random(1, 8)},
        'D10': {color: '#DA85FF', value: random(1, 10)},
        'D20': {color: '#7FBEEB', value: random(1, 20)},
        'D100': {color: 'white', value: random(1, 100)},
    }
	// getRandomDices = setDice;
}
