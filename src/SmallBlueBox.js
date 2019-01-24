import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SmallBlueBox() {


  return(
    <View style={styles.smallBlueBox}>
      <Text style={{color: 'white'}}>I am the small one</Text>
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
