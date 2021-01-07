import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    marginBottom:20,
  }
});

const ShowRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({id: id, first: 4});

  if (repository) {
    const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];
    
    const ItemSeparator = () => <View style={styles.separator} />;
    const onEndReach = () => {
      fetchMore();
    };

    return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => { 
          return ( <ReviewItem review={item} />);
        }}
        keyExtractor={({ id }) => id }
        ListHeaderComponent={() => {
          return ( <View style={styles.container}><RepositoryItem item={repository} /></View> ); }}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  } else {
    return <View><Text>Loading...</Text></View>;
  }
};

export default ShowRepository;