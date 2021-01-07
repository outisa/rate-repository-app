import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce';

const SearchingBar = ({ setVariables }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = useDebouncedCallback(
    () => {
      setVariables({searchKeyword: searchQuery});
    },
    3000
  );
  const onChangeSearch = query => {
    setSearchQuery(query);
    fetchData.callback(query);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchingBar;