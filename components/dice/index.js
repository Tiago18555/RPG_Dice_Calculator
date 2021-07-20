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

export function StaticDiceBox ({diceType, textColor}) {
	return (
		<>
			<View style={styles.smallContainer}>
				<Text style={{
					fontSize: 15, 
					fontWeight: 600, 
					textAlign: 'center', 
					margin: 'auto', 
					color: textColor
				}}>
					{diceType}
				</Text>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
		backgroundColor: '#666666',
		border: '2px solid black',
		borderRadius: '10px',
		padding: 0,
		margin: 6,
	},
	p: {
		fontSize: 15,
		fontWeight: 600,
		textAlign: 'center',
		margin: 'auto',
		color: 'white',
	},
	smallContainer: {
		width: 50,
		height: 50,
		backgroundColor: '#666666',
		border: '2px solid black',
		borderRadius: '10px',
		padding: 0,
	}
})