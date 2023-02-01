import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const TextField = ({ val, placeholder, inputMode, onChange}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={val}
      placeholder={placeholder}
      keyboardType={inputMode === "numeric" ? "numeric" : "default"}
      inputMode={inputMode}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextField