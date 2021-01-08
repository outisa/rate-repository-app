import { useMutation} from '@apollo/react-hooks';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser= async ({ name, password }) => {
    const {username, id} = await mutate({ variables: { user: 
      { username: name, password: password }
    }});
    return {username, id};
  };

  return [createUser, result];
};

export default useSignUp;