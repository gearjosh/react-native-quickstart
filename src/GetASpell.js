// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput } from 'react-native';
//
// class GetASpell extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {spell: ''}
//   }
//
//   getSpellFromApiAsync(number) {
//     return fetch('http://dnd5eapi.co/api/spells' + number)
//       .then((response) => response.json())
//       .then((responseJson) => {
//         const spellName = responseJson.name;
//         this.setState({spell: spellName})
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
//
//   return(
//     <View>
//       <TextInput
//         placeholder='Type a number from 1 to 319 to get a spell'
//         type='number'
//         onSubmitEditing={(number) => this.getSpellFromApiAsync(number)}></TextInput>
//     </View>
//   )
// }
//
// const styles = StyleSheet.create({
//
//   }
// });
//
//
// export default GetASpell;
