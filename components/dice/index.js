import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity,
} from 'react-native';

export function DiceBox ({diceType}) {
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.p}>
					{diceType}
				</Text>
			</View>
		</>
	)
}

export function SmallDiceBox ({diceType}) {
	return (
		<>
			<View style={styles.smallContainer}>
				<Text style={styles.smallP}>
					{diceType}
				</Text>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 90,
		height: 90,
		backgroundColor: '#888888',
		border: '5px solid black',
		borderRadius: '35px',
	},
	p: {
		fontSize: 30,
		fontWeight: 900,
		textAlign: 'center',
		margin: 'auto',
		color: 'white',
	},
	smallContainer: {
		width: 50,
		height: 50,
		backgroundColor: '#888888',
		border: '2px solid black',
		borderRadius: '10px',
		padding: 0,
	},
	smallP: {
		fontSize: 15,
		fontWeight: 600,
		textAlign: 'center',
		margin: 'auto',
		color: 'white',
	}
})