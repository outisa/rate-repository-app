import { useState, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES, GET_REPOSITORIES_AVERAGE_RATING } from '../graphql/queries';

const useRepositories = () => {
  const [getRepos, result] = useLazyQuery(GET_REPOSITORIES_AVERAGE_RATING);

  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  const [repositories, setRepositories] = useState(data?.repositories);
  const getRepositories = ( orderBy, orderDirection) => {
    getRepos({ variables: {orderBy: orderBy, orderDirection: orderDirection } });
  };

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return {result, getRepositories, repositories };
};

export default useRepositories;