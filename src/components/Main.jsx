import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SignOut from './SignOut';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.main,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <RepositoryList />
          </Route>
          <Route path="/signIn" exact>
            <SignIn/>
          </Route>
          <Route path="/signOut" exact>
            <SignOut />
          </Route>           
          <Redirect to="/" />      
        </Switch>
    </View>
  );
};

export default Main;