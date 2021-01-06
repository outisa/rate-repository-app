import React from 'react';
import { useParams } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    marginBottom:20,
  }
});

const ShowRepository = () => {
  const { repositories } = useRepositories();
  const { id } = useParams();
  const { repository } = useRepository(id);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const repositoryToshow = repositoryNodes.filter(item => item.id === id);

  const info = repository;

  const reviewNodes = info
  ? info.reviews.edges.map((edge) => edge.node)
  : [];
  
  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => { 
        return ( <ReviewItem review={item} />);
      }}
      keyExtractor={({ id }) => id }
      ListHeaderComponent={() => {
        return ( <View style={styles.container}><RepositoryItem item={repositoryToshow[0]} info={info} /></View> ); }}
      ItemSeparatorComponent={ItemSeparator}
      />
  );
};

export default ShowRepository;