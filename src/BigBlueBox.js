import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native';

import Touchable from './Touchable';

function BigBlueBox() {

  return(
    <View style={styles.bigBlueBox}>
      <Text>I am the big one</Text>
      <Text>I am more text</Text>
      <Text>I am yet more</Text>
      <Touchable></Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  bigBlueBox: {
    flex: 3,
    padding: 5,
    justifyContent: 'space-around',
    backgroundColor: 'lightblue',
    alignSelf: 'stretch'
  }
});


export default BigBlueBox;
