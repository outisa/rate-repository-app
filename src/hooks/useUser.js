import { useQuery } from '@apollo/react-hooks';

import { GET_USER } from '../graphql/queries';

const useUser = () => {
  const { data, loading, error, refetch } = useQuery(GET_USER);
  console.log(error);
  return {
    authorizedUser: data ? data.authorizedUser : undefined,
    loading,
    refetch,
  };
};


export default useUser;