import React from 'react';
import MenuBar from './MenuBar';
import { View } from 'react-native';
import SearchingBar from './SearchBar';

const RepositoryListHeader = ({setVariables}) => {
  return (
    <View>
      <SearchingBar setVariables={setVariables}/>
      <MenuBar setVariables={setVariables}/>
    </View>
  );
};

export default RepositoryListHeader;