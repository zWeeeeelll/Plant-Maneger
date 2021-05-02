import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps, TouchableOpacityBase } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest } : ButtonProps){
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Confirmar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
  },

  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading
  }
})