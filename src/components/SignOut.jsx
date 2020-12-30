import { useContext } from 'react';
import { useHistory } from 'react-router-native';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const SignOut = () => {
  const history = useHistory();
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  authStorage.removeAccessToken();
  apolloClient.resetStore();
  console.log('hello');
  history.push('/signIn');

  return (
    null
  );
};

export default SignOut;