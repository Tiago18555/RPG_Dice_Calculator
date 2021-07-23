import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,  
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// var value
export default function AddFixValueBox ({ arrayOfDices, callbackArray}) {

	const [addButton, setAddButton] = useState(true);
	const [text, setText] = useState('');
	const [black, grey] = ['black', 'grey']

	return (
		<>
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
					onChangeText={
						text => {
							if(text == '') {
								setAddButton(true)
								setText(text)
							} else { 
								setAddButton(false)
								setText(text)
							}
						}			
					}										
					defaultValue={text}
					keyboardType='number-pad'
					maxLength={2}
				/>
				{ addButton &&
					<AddButton 
						disabled={true}
						color={grey}
						text={text}
						arrayOfDices={arrayOfDices}
						callbackArray={callbackArray}
					/>
				}
				{ !addButton &&
					<AddButton 
						disabled={false}
						color={black}
						text={text}
						arrayOfDices={arrayOfDices}
						callbackArray={callbackArray}
					/>
				}
			</View>
		</>
	)

	function AddButton({disabled, color, text, arrayOfDices, callbackArray}) {
		return (
			<TouchableOpacity
				onPress={() => {
					if (arrayOfDices.length < 20) {
						arrayOfDices.push(						[
							text,		//Label
							'#FF7777',	//Cor do render do dado
							text		//Valor p/ array dos calculos
						])
					}
					callbackArray()
				}}
				disabled={disabled}					
			>
			<Ionicons 
				name="add-circle-sharp"
				size={40} 
				color={color} 
			/>
			</TouchableOpacity>
		)
	}
}


const styles = StyleSheet.create({
	container : {
		display: 'flex',
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'space-between',	
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