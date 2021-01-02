import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from 'yup';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  submit: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'blue',
  },
  container: {
    backgroundColor: 'white',
  },
});
const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

export const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View>
            <View>
              <FormikTextInput
                name='username'
                placeholder='Username'
                testID='usernameField'
              />
            </View>
            <View>
              <FormikTextInput
                name='password'
                placeholder='Password'
                secureTextEntry
                testID='passwordField'
              />
            </View>
            <TouchableWithoutFeedback 
                onPress={handleSubmit} 
                testID='submitButton'>
              <View style={styles.submit}>      
                <Text fontSize='heading' color='white'>Sign in</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>
    </View>
  );
};