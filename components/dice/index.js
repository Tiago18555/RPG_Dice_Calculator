import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity,
} from 'react-native';

export function DiceBox ({diceType, textColor}) {
	return (
		<>
			<View style={styles.container}>
				<Text style={{
					fontSize: 19,
					fontWeight: "bold",
					textAlign: 'center',
					margin: 'auto',
					color: textColor,
				}}>
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
					fontSize: 19, 
					fontWeight: "bold", 
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
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 3,
		borderRadius: 10,
		paddingTop: 10,
		margin: 4,
	},
	smallContainer: {
		width: 50,
		height: 50,
		backgroundColor: '#666666',
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 3,
		borderRadius: 10,
		paddingTop: 10
	}
})