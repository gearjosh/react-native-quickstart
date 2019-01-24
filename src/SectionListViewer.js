import React from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';

function SectionListViewer() {

  return(
    <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text
            style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 21,
    color: 'hotpink',
  },
  sectionHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'skyblue',
    backgroundColor: 'steelblue',
  }
});


export default SectionListViewer;
