import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Done = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Details submitted successfully.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
});

export default Done;