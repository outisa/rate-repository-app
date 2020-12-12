import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      flexShrink: 1,
    },
  background: {
    backgroundColor: theme.background.main,
  },
});

const Main = () => {
  const mainStyle = [
      styles.container,
      styles.background,
  ];
  return (
    <View style={mainStyle}>
      <TouchableWithoutFeedback onPress={() => console.log('hello')} >
        <AppBar />
      </TouchableWithoutFeedback>
      <View>
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;