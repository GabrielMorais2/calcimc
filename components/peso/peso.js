import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';
import { styles } from './style';

export default props => {
    return(
    <View style={styles.inputContainer}>
        <Text>Informe seu Peso (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => props.setPeso(text)}
        />
      </View>
    )
}