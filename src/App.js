import React, { Component } from 'react';
// NOTE: this is all from the template; find out where it goes later
// import { NetInfo } from 'react-native';
// import { Provider, connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import Monster from './Monster';
import BigBlueBox from './BigBlueBox';
import MediumBlueBox from './MediumBlueBox';
import SmallBlueBox from './SmallBlueBox';

export default class App extends Component {

  _onButtonPress() {
    Alert.alert('This button does something, see?')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I am a splash page with three blue boxes and a button. Look how ugly I am!</Text>
        <Button style={styles.button}
          onPress={this._onButtonPress}
          title='I am a button you can click' />
        <View style={{flex: 1}}>
          <BigBlueBox></BigBlueBox>
          <MediumBlueBox></MediumBlueBox>
          <SmallBlueBox></SmallBlueBox>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fafafa',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'steelblue'
  },
  button: {
    width: '80%',
    color: 'red',
  }
});
