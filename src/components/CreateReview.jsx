import React from 'react';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useReview from '../hooks/useReview';

import { ReviewForm } from './ReviewForm';


const CreateReview = () => {
  const [createReview] = useReview();
  const history = useHistory();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, text } = values;
    try {
      const rating = parseInt(values.rating);
      const { data } = await createReview({ ownerName, repositoryName, rating, text });
      apolloClient.resetStore();
      history.push(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      Alert.alert(
        'Creation error',
        `${e}`,
        [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <ReviewForm onSubmit={onSubmit} />
  );
};

export default CreateReview;