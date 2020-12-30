import React from 'react';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: '',
};
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
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
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log('data', data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;