import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      testID="repositories"
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return ( 
          <TouchableOpacity 
            onPress={() => history.push(`/repository/${item.id}`)}
          >
            <RepositoryItem item={ item } />
          </TouchableOpacity>
        );
      }}
    />
  );
};