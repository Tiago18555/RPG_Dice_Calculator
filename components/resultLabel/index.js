import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { calculate } from '../diceRenderContainer'
import { reset } from '../../App';

export default function ResultLabel ({ arrResult, resultString, colorState, arrayOfDices, setDiceRender }) {

	const [resultLabel, setResultLabel] = useState()

	return (
		<>
			<View style={styles.container}>
				<Text 
					style={{
						width: '89%',
						fontWeight: "700", 
						fontSize: 15,
						marginRight: '2%',
					}}
					adjustsFontSizeToFit={true}
					numberOfLines={3}
					ellipsizeMode='tail'
				>
					RESULTADO: {resultLabel}
				</Text>
				<View style={styles.subContainer}>
					<TouchableOpacity 
						style={styles.playButton}
						onPress={() => {
							resultString = calculate(resultString, arrResult)
							setResultLabel(resultString)
						}}
					>
						<FontAwesome 
							name="play-circle-o" 
							size={45} 
							color={colorState} 
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.playButton}
							onPress={() => {
								reset()
							}}					
					>
						<FontAwesome 
							name="refresh" 
							size={45} 
							color="black" 
						/>
					</TouchableOpacity>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container : {
		display: 'flex',
		flexDirection: 'row',
		padding: 10,
	},
	subContainer: {
		width: 'auto',
		margin: 0,
		padding: 0,
	},
	playButton: {
		// position: 'absolute',
		// top: -50,
		// left: 320,
	},
	refreshButton: {
		// position: 'absolute',
		// top: 600,
		// left: 295,
	}

})

