import React from 'react'
import { StyleSheet, View,Image } from 'react-native';
import spinner from './spinner.gif';

export default()=> {
  return (
    <View>
        <Image source={spinner} />
    </View>
  )
}
