import React from 'react';
import { View, StyleSheet, FlatList, Alert} from 'react-native';
import Text from './Text';
import useUser from '../hooks/useUser';
import ReviewItem from './ReviewItem';
import useDeleteReview from '../hooks/useDeleteReview';

const MyReviews = () => {
  const { authorizedUser, loading, refetch } = useUser();
  const [deleteReview] = useDeleteReview();
  
  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    container: {
      marginBottom:20,
    }
  });
  
  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  const removeReview = (id) => {
    deleteReview(id); 
    refetch();
  };

  const handleDelete = (id) => {
    console.log('Fuck this shit', id);
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Delete review', onPress: () => removeReview(id)}
      ],
      { cancelable: false }
    );
  };

  const reviewNodes = authorizedUser
  ? authorizedUser.reviews.edges.map((edge) => edge.node)
  : [];
  
  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => { 
        return ( <ReviewItem review={item} myReviews={true} handleDelete={handleDelete} />);
      }}
      keyExtractor={({ id }) => id }
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;