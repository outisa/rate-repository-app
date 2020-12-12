import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

import { Formik } from 'formik';

const initialValues = {
  name: '',
  password: '',
};
const styles = StyleSheet.create({
  submit: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
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

const SignInForm = ({ onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='name' placeholder='Username' />
      <FormikTextInput secureTextEntry name='password' placeholder='Password' />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.submit}>
          <Text fontSize='heading' color='white' >Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;