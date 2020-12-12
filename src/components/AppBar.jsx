import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 10,
    flex: 0,
  },
  colorAppBar: {
    backgroundColor: theme.background.appBar,
  }
});

const AppBar = () => {
  const stylesAppBar = [
    styles.container,
    styles.colorAppBar,
  ];

  return (
    <View style={stylesAppBar}>
      <Text fontWeight='bold' fontSize='heading' color='white' >Repositories</Text>
    </View>
  );
};

export default AppBar;