import React from 'react';
import { useHistory } from 'react-router-native';

import useSignUp from '../hooks/useSignUp';
import { SignUpForm} from './SignUpForm';

const SignUp = () => {
  const history = useHistory()
  const [createUser] = useSignUp();
  const onSubmit = async (values) => {
    const name = values.username;
    const password = values.password;
    try {
      const { data } = await createUser({ name, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SignUpForm onSubmit={onSubmit} />
  );
};

export default SignUp;