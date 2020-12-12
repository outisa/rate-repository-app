import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  field: {
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
  }
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle =[
    style,
    styles.field
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;