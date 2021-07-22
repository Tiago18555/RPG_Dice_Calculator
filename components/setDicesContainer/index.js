import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { 
  StyleSheet, 
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
	/*
		INDEXES => SDB_0~6 StaticDiceBox, TO_0~6 TouchedOpacity	
	*/

	const [text, setText] = useState('');
	const [arrayOfDices, setArrayOfDices] = React.useState();
	const [addButton, setAddButton] = useState();

	if (text === '' && setAddButton === true) {
		setAddButton(false);
	}

	return (
		<>
			<View style={styles.mainContainer}>
				<Text style={styles.title}>ADICIONE DADOS OU VALOR FIXO</Text>
				<View style={styles.container} onPress={generateRandomDiceValue()}>	
					{
						[
							{child: 'D4', color: '#7AFA85'}, 
							{child: 'D6', color: '#E3CE64'}, 
							{child: 'D8', color: '#FF9D7D'}, 
							{child: 'D10', color: '#DA85FF'}, 
							{child: 'D20', color: '#7FBEEB'}, 
							{child: 'D100', color: 'white'}
						].map((type, index) => 
							<TouchableOpacity 
								onPress={
									setArrayOfDices.bind(
										this, 
										[getRandomDices[type.child].value] //Resultado do Random										
									),
									callbackArray.bind(this, [[
										type.color,									
										type.child,
										getRandomDices[type.child].value
									]])
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
				<View style={styles.container}>
					<Text 
						style={{
							fontSize: 30, 
							fontWeight: "600",
						}}
					>
						FIXO: 
					</Text>
					<TextInput 
						style={styles.input} 
						onChangeText={text => setText(text)}
						defaultValue={text}
						keyboardType='number-pad'
						maxLength={2}
					/>
					<TouchableOpacity
						onPress={setArrayOfDices.bind(this, [text])}
						onPress={callbackArray.bind(this, [[
							'#FF7777',	//Cor do render do dado
							text,		//Label
							text		//Valor p/ array dos calculos
						]])}
						//Fazer um IF / ELSE (se addButton === false, disable = true<TouchableOpacity>)					
					>
						<Ionicons 
							name="add-circle-sharp"
							size={40} 
							color="black" 
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
	},
	input: {
		width: '60%', 
		height: 40,
		borderColor: 'grey',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: '#FFFFFF',
		fontSize: 25,
		fontWeight: "700",
		textAlign: 'center',
	}
})

function random(min, max) {
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDiceValue () {
    const setDice = {
        'D4': {color: '#7AFA85', value: random(1, 4)},
        'D6': {color: '#E3CE64', value: random(1, 6)},
        'D8': {color: '#FF9D7D', value: random(1, 8)},
        'D10': {color: '#DA85FF', value: random(1, 10)},
        'D20': {color: '#7FBEEB', value: random(1, 20)},
        'D100': {color: 'white', value: random(1, 100)},
    }
	getRandomDices = setDice;
}
