import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import Text from './Text';
import ItemStatistics from './ItemStatistics';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingEnd:10,
  },
  subContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'flex-start',
    marginLeft: 75,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  headerContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    flexGrow: 1,
  },
  textContainer2: {
    paddingEnd: 20,
    paddingStart: 15,
    flexGrow: 0,
  },  
  colorItem: {
    backgroundColor: theme.background.listItem,
  },
  colorLanguage: {
    backgroundColor: theme.colors.primary,
  },
  tinyLogo: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
  const itemStyle = [
    styles.container,
    styles.colorItem,
  ];

  const languageStyle = [
    styles.subContainer,
    styles.colorLanguage,
  ];

  return (
    <View style={itemStyle}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={styles.textContainer2}>
          <Text fontWeight='bold' fontSize='heading'>{item.fullName}</Text>
          <Text fontSize='subheading' color='textSecondary'>{item.description}</Text>
        </View>
      </View> 
      <View style={languageStyle}>
        <Text color='white' fontSize='subheading'>{item.language}</Text>
      </View>
      <ItemStatistics item={item}/>
    </View>
  );
};

export default RepositoryItem;