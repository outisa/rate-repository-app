import { useContext } from 'react';
import { useMutation} from '@apollo/react-hooks';
import { LOGIN } from '../graphql/mutations';

import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const authorization = await mutate({ variables: { credentials:  { username: username, password: password} }});
    await authStorage.setAccessToken(authorization.data.authorize.accessToken);
    apolloClient.resetStore();
    return authorization;
  };

  return [signIn, result];
};

export default useSignIn;