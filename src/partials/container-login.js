import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ContainerLogin extends Component {
  render() {
    return (
      <View style={borderStyle['borderContainer']}>
        <Text>this is a container div</Text>
          {this.props.children}
        <Text>...wrapper</Text>
      </View>
    )
  }
}

const borderStyle = StyleSheet.create({
  borderContainer: {
    //border: '2px solid black'
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    alignItems: 'center'
  }
});
