import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './style';

export default function tabela() {
  return (
    <Image style={styles.image} source={require('../../assets/image.png')} />
  );
}
