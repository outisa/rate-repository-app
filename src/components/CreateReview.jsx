import React from 'react';
import { useHistory } from 'react-router-native';

import useReview from '../hooks/useReview';
import { ReviewForm } from './ReviewForm';


const CreateReview = () => {
  const [createReview] = useReview();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { ownerName, repositoryName, text } = values;
    try {
      const rating = parseInt(values.rating);
      const { data } = await createReview({ ownerName, repositoryName, rating, text });
      history.push(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewForm onSubmit={onSubmit} />
  );
};

export default CreateReview;