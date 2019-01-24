import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native';

import Touchable from './Touchable';
import FlatListViewer from './FlatListViewer';
import GetASpell from './GetASpell';

function BigBlueBox() {

  return(
    <View style={styles.bigBlueBox}>
      <Text>I am the big one and I have announcements:</Text>
      <FlatListViewer></FlatListViewer>
      <Touchable></Touchable>

    </View>
  )
}

const styles = StyleSheet.create({
  bigBlueBox: {
    flex: 3,
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
    alignSelf: 'stretch'
  }
});


export default BigBlueBox;
