import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const myvar = "some test content";

export default class Content extends Component<{}> {
  render() {
    return (
      <View>
        <Text>this is {myvar}</Text> 
      </View>
    )
  }
}
