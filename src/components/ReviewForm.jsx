import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from 'yup';
import { Formik } from 'formik';


const styles = StyleSheet.create({
  submit: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'blue',
  },
  container: {
    backgroundColor: 'white',
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: 0,
  text:'',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Name of the owner is required'),
  repositoryName: yup
    .string()
    .required('Name of the repository is required'),
  rating: yup
    .number()
    .max(100, 'Rating can be maximum 100.')
    .min(0, 'Rating must be at least 0.')
    .required('rating is required')
});

export const ReviewForm = ({ onSubmit}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View>
            <View>
              <FormikTextInput
                name='ownerName'
                placeholder='Owner of the repository'
              />
            </View>
            <View>
              <FormikTextInput
                name='repositoryName'
                placeholder='Repository name'
              />
            </View>
            <View>
              <FormikTextInput
                name='rating'
                placeholder='Rating'
              />
            </View>
            <View>
              <FormikTextInput
                name='text'
                placeholder='Review'
                multiline
              />
            </View>
            <TouchableWithoutFeedback 
                onPress={handleSubmit} >
              <View style={styles.submit}>      
                <Text fontSize='heading' color='white'>Create Review</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>
    </View>
  );
};