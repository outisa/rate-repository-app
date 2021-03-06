import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';
import useUser from '../hooks/useUser';

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
  const {authorizedUser} = useUser();
  console.log(authorizedUser);

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.link}>
          <Link to='/' component={TouchableOpacity} activeOpacity={0.8}>
            <Text fontWeight='bold' fontSize='heading' color='white' >Repositories</Text>
          </Link>
        </View>
        { authorizedUser ?
          <>
            <View style={styles.link}>
              <Link to='/createReview' component={TouchableOpacity} activeOpacity={0.8}>
                <Text fontWeight='bold' fontSize='heading' color='white' >Create a Review</Text>
              </Link>
            </View>
            <View style={styles.link}>
              <Link to='/myReviews' component={TouchableOpacity} activeOpacity={0.8}>
                <Text fontWeight='bold' fontSize='heading' color='white' >My Reviews</Text>
              </Link>
            </View>
            <View style={styles.link}>
              <Link to='/signOut' component={TouchableOpacity} activeOpacity={0.8}>
                <Text fontWeight='bold' fontSize='heading' color='white' >SignOut</Text>
              </Link>
            </View>
          </>
          :
          <>
            <View style={styles.link}>
              <Link to='/signUp' component={TouchableOpacity} activeOpacity={0.8}>
                <Text fontWeight='bold' fontSize='heading' color='white' >SignUp</Text>
              </Link>
            </View>
              <View style={styles.link}>
                <Link to='/signIn' component={TouchableOpacity} activeOpacity={0.8}>
                  <Text fontWeight='bold' fontSize='heading' color='white' >SignIn</Text>
                </Link>
            </View>
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;