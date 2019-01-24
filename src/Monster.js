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
      <Image source={picture} style={styles.monster} resizeMode='contain'></Image>
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
    flex: 2,
    backgroundColor: 'lime',
    width: 320,
    height: 400
  }
});


export default Monster;
