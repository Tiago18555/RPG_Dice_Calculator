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
import { SmallDiceBox } from '../dice';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function DiceRenderContainer ({ diceType }) {

	return (
		<>
			<View style={styles.mainContainer}>
				<View style={styles.container}>
					{
						['10', '20', 'D100'].map((item) =>
							<>
								<SmallDiceBox diceType={item} key={item}/>
								<Ionicons name="add" size={24} color="green" />
							</>
						)
					}
				</View>			
			</View>

			{/* <Button /> */}
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