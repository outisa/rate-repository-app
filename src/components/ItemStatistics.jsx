import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';


const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const handleNumbers = number  => {
  let newNumber;
  if (number > 999) {
    newNumber = number/1000;
    newNumber = newNumber.toFixed(1);
    newNumber = newNumber + 'k';
  } else {
    newNumber = number;
  }
  return newNumber;
};

const ItemStatistics = ({ item }) => {
  return (
      <View style={styles.textContainer}>
        <Text fontSize='subheading' fontWeight='bold' textPlacement='center' testID={`${item.id}, stargazerCount`}>{handleNumbers(item.stargazersCount)}{'\n'}<Text>Stars</Text></Text>
        <Text fontSize='subheading' fontWeight='bold' textPlacement='center' testID={`${item.id}, forksCount`}>{handleNumbers(item.forksCount)}{'\n'}<Text>Forks</Text></Text>
        <Text fontSize='subheading' fontWeight='bold' textPlacement='center' testID={`${item.id}, reviewCount`}>{handleNumbers(item.reviewCount)}{'\n'}<Text>Reviews</Text></Text>
        <Text fontSize='subheading' fontWeight='bold' textPlacement='center' testID={`${item.id}, ratingAverage`}>{handleNumbers(item.ratingAverage)}{'\n'}<Text>Rating</Text></Text>
      </View>
  );
};

export default ItemStatistics;