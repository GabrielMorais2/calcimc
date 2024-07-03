import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';
import { styles } from './style';

export default props => {
    return(
    <View>
        <Text style={styles.resultText}>Seu IMC é: {props.resultado}</Text>
      </View>
    )
}