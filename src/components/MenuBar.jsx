import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';


const MenuBar = () => {
  const { result, getRepositories} = useRepositories();
  const [visible, setVisible] = useState(false);
  const [ordered, setOrdered] = useState(null);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  let orderBy = 'CREATED_AT';
  let orderDirection = 'ASC';

  const getRepos1 = () => {
    getRepositories(orderBy);
  };
  
  const getRepos2 = () => {
    orderBy='RATING_AVERAGE';
    orderDirection = 'DESC';
    getRepositories(orderBy, orderDirection);
  };
  
  const getRepos3 = () => {
    orderBy='RATING_AVERAGE';
    getRepositories(orderBy, orderDirection);
  };
  useEffect (() => {
    if (result.data) {
      setOrdered(result.data.repositories);
    }
  }, [result.data]);

  if (ordered) {
    return <RepositoryListContainer repositories={ordered}/>;
  } else {
    return (
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Show sorting options</Button>}>
            <Menu.Item onPress={() => getRepos1()} title="Latest repositories" />
            <Menu.Item onPress={() => getRepos2()} title="Highest ratet repositories" />
            <Menu.Item onPress={() => getRepos3()} title="Lowest ratet repositories" />
          </Menu>
        </View>
    );
  }
};

export default MenuBar;