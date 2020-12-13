import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  field: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
  },
  errorField: {
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
  },
});

const TextInput = ({ style, error, ...props }) => {
  let textInputStyle =[
    style,
    styles.field,
  ];
  if (error) {
    textInputStyle =[
      style,
      styles.errorField,
    ];
  }
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;