import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { styles } from './style';

export default props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.calcularIMC}>
      <Text style={styles.buttonText}>Calcular IMC</Text>
    </TouchableOpacity>
  );
};
