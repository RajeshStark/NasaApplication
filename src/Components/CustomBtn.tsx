import React from 'react';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import { btnTypes } from './types'

export default function CustomBtn({title, onPress, disabled} : btnTypes){

	return(
		<Button 
		  mode="contained" 
		  onPress={onPress} 
		  style={styles.btn}
		  disabled={disabled}
		>
		   {title}
		</Button>
		)
}