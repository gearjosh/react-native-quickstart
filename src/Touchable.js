import React from 'react';
import { StyleSheet, TouchableNativeFeedback, Alert, View, Text } from 'react-native';

function Touchable() {


  return(
    <View>
      <TouchableNativeFeedback
        onPress={() => {Alert.alert('You touched it!')}}>
        <Text style={styles.touchable}>Touch me!</Text>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  touchable: {
    color: 'hotpink',
    fontSize: 44,
    fontWeight: 'bold',
  }
});


export default Touchable;
