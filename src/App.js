import React, { Component } from 'react';
// NOTE: this is all from the template; find out where it goes later
// import { NetInfo } from 'react-native';
// import { Provider, connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Monster from './Monster';

export default class App extends React.Component {
  render() {


    return (
      <View style={styles.container}>
        <Text>I am a splash page with a monster.</Text>
        <Button title='I am a button you cannot click' />
        <Monster name='Doug'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
