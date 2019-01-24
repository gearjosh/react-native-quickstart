import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Scroller from './Scroller';

function SmallBlueBox() {


  return(
    <View style={styles.smallBlueBox}>
      <Text style={{color: 'white'}}>I am the small one. The text below scrolls horizontally:</Text>
      <Scroller></Scroller>
    </View>
  )
}

const styles = StyleSheet.create({
  smallBlueBox: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignSelf: 'stretch',
  }
});


export default SmallBlueBox;
