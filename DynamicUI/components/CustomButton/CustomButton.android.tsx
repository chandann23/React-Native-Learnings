import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import type { CustomButtonProps } from './CustomButton';

const AndroidButton: React.FC<CustomButtonProps> = ({ onPress, title }) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>AndroidButton</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default AndroidButton;
