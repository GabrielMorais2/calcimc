import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';
import { styles } from './style';

export default props => {
    return(
        <View style={styles.inputContainer}>
        <Text>Informe sua Altura (m):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => props.setAltura(text)}
        />
      </View>
    )
}