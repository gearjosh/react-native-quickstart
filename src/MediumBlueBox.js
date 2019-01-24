import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import SectionListViewer from './SectionListViewer';

class MediumBlueBox extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return(
      <View style={styles.mediumBlueBox}>
        <Text style={styles.text}>I am the medium one, and here is the list of everyone with a birthday today:</Text>
        <SectionListViewer></SectionListViewer>
        <TextInput placeholder='Type a word here to serifize it below' onChangeText={(text) => this.setState({text})} style={styles.inputField}></TextInput>
        <Text style={styles.serifText}>{this.state.text}</Text>
      </View>
    )

  }

}

const styles = StyleSheet.create({
  mediumBlueBox: {
    padding: 5,
    flex: 2,
    backgroundColor: 'blue',
    alignSelf: 'stretch'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  inputField: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'white',
    color: 'white'
  },
  serifText: {
    fontFamily: 'serif',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fafafa'
  }
});


export default MediumBlueBox;
