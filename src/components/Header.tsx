import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import userImg from '../assets/isaac.png';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';

export function Header(){
  return (
    <View style={styles.container}>
      <View>
        <Text>Ola,</Text>
        <Text>Isaac</Text>
      </View>

      <Image source={userImg} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.red,
    marginTop: getStatusBarHeight()
  }
})