import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.background.appBar,
  },
  scrollContainer: {
    justifyContent: 'space-between',
  },
  link: {
    marginLeft: 10,
    marginRight:10,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.link}>
          <Link to='/' component={TouchableOpacity} activeOpacity={0.8}>
            <Text fontWeight='bold' fontSize='heading' color='white' >Repositories</Text>
          </Link>
        </View>
        <View style={styles.link}>
          <Link to='/signIn' component={TouchableOpacity} activeOpacity={0.8}>
            <Text fontWeight='bold' fontSize='heading' color='white' >SignIn</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;