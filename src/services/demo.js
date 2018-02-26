
import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  View
} from 'react-native';

export default class DemoIP extends Component {
  state = {}
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  async componentDidMount() {
    // StatusBar.setNetworkActivityIndicatorVisible(true)
    // const res = await fetch('https://api.ipify.org?format=json')
    // const {ip} = await res.json()
    // await this.setStateAsync({ipAddress: ip})
    // StatusBar.setNetworkActivityIndicatorVisible(false)
  }
  render() {
    return (
      <View>
        <Text>
          My IP is {this.state.ipAddress || 'Unknown'}
        </Text>
      </View>
    );
  }
}
