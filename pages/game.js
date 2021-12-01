import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Game = ({}) => {
  return (
    <View style={styles.container}>
      <Text> GAME PAGE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
