import React,{useState} from 'react';

import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const [variables, setVariables] = useState(null); 
  const { repositories, fetchMore } = useRepositories({first: 11, ...variables });

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };

  return <RepositoryListContainer 
    repositories={repositories}
    setVariables={setVariables}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;