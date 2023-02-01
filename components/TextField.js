import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const TextField = ({ val, placeholder, inputMode, editable = true, onChange}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={val}
      placeholder={placeholder}
      keyboardType={inputMode === "numeric" ? "numeric" : "default"}
      inputMode={inputMode}
      editable={editable}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
});

export default TextField