import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

function Monster(props) {
  let picture = {
    uri: 'https://e96pp6nibh-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/AntiMonsterSpray_A.jpg'
  }

  return(
    <View style={styles.monsterContainer}>
    <Text>Monster: {props.name}</Text>
    <View >
      <Image source={picture} style={styles.monster} ></Image>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  monsterContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  monster:  {
    backgroundColor: 'lightblue',
    width: '100%',
    aspectRatio: 1/0.94
  }
});


export default Monster;
