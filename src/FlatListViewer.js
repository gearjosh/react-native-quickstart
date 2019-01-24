import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

function FlatListViewer() {

  return(
    <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>Happy birthday, {item.key}!</Text>}
        />
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 21,
    color: 'steelblue',
    backgroundColor: 'hotpink',
  }
});


export default FlatListViewer;
