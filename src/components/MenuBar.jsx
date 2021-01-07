import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';

const MenuBar = ({ setVariables }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const getRepos = (variables) => {
    setVariables(variables);
  };
  
  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>      
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Show sorting options</Button>}>
        <Menu.Item onPress={() => getRepos({ orderBy: 'CREATED_AT', orderDirection: 'DESC'})} title="Latest repositories" />
        <Menu.Item onPress={() => getRepos({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'})} title="Highest ratet repositories" />
        <Menu.Item onPress={() => getRepos({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'})} title="Lowest ratet repositories" />
      </Menu>
    </View>
  );

};

export default MenuBar;