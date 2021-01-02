import { useState, useEffect} from 'react';
import { useQuery }from '@apollo/react-hooks';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data } = useQuery(GET_REPOSITORY, {
    variables: { id: id } 
  });

  const [repository, setRepository] = useState(null);

  useEffect(() => {
    if (data) {
      setRepository(data.repository);
    }
  }, [data]);

  return {repository};
};

export default useRepository;