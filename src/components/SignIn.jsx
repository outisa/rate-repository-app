import React from 'react';
import { useHistory } from 'react-router-native';

import useSignIn from '../hooks/useSignIn';

import { SignInForm } from './SignInForm';

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
    <SignInForm onSubmit={onSubmit} />
  );
};

export default SignIn;