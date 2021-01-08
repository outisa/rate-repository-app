import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format } from 'date-fns';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight:5,
    backgroundColor: theme.background.listItem,
  },
  headerContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    flexGrow: 1,
  },
  subContainer: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    width: 50,
    height: 50,
    marginRight: 5,
    borderRadius: 50/2,
    borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center',
  },
  subContainer2: {
    maxWidth: 325,
    alignSelf: 'center',
  },
  submit: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 2,
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  primaryBackground: {
    backgroundColor: theme.colors.primary,
  },
  deleteBackgroud: {
    backgroundColor: 'red',
  },
});

const ReviewItem = ({ review, myReviews, handleDelete }) => {
  const repositoryName = review.repositoryId;
  const date = format(Date.parse(review.createdAt), 'dd.MM.yyyy', { awareOfUnicodeTokens: true });
  const history = useHistory();

  const normalStyle = [
    styles.primaryBackground,
    styles.submit,
  ];

  const deleteStyle = [
    styles.deleteBackgroud,
    styles.submit,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.subContainer}>
          <Text color='blue' fontSize='heading' fontWeight='bold' >{review.rating}</Text>
        </View>
        <View style={styles.subContainer2}>
          { myReviews ? 
            <Text fontWeight='bold' fontSize='heading'>{repositoryName.replace('.', '/')}</Text>
          :
            <Text fontWeight='bold' fontSize='heading'>{review.user.username}</Text>
          }
          <Text color='textSecondary'>{date}</Text>
          <Text color='primary' fontSize='huge'>
            {review.text}
          </Text>
        </View>
      </View>
      { myReviews ?
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={() => history.push(`/repository/${review.repositoryId}`)}>
            <View style={normalStyle}>
              <Text color='white'  fontWeight='bold' fontSize='subheading'>View reposiory</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() =>handleDelete(review.id)}>
            <View style={deleteStyle}>
              <Text color='white' fontWeight='bold' fontSize='subheading'>Delete review</Text>
            </View>
          </TouchableWithoutFeedback>
          </View>   
          :
          <></>
        }
    </View>
  );
};

export default ReviewItem;