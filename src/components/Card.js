import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ item }) => (
  <View style={styles.cardContainer}>
    <Text>{item.title}</Text>
    <Text>{item.city_name}</Text>
    <Image
      resizeMethod="auto"
      resizeMode="contain"
      style={{ width: 300, height: 200, backgroundColor: 'transparent' }}
      source={{ uri: item.image ? item.image.medium.url : 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
    />
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    height: 300,
    backgroundColor: 'green',
    margin: 10,
    borderRadius: 10,
  },
});

export default Card;
