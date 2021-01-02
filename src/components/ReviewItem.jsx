import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format } from 'date-fns';

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
});

const ReviewItem = ({ review }) => {
  const date = format(Date.parse(review.createdAt), 'yyyy.MM.dd', { awareOfUnicodeTokens: true });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.subContainer}>
          <Text color='blue' fontSize='heading' fontWeight='bold' >{review.rating}</Text>
        </View>
        <View style={styles.subContainer2}>
          <Text fontWeight='bold' fontSize='heading'>{review.user.username}</Text>
          <Text color='textSecondary'>{date}</Text>
          <Text color='primary' fontSize='huge'>
            {review.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;