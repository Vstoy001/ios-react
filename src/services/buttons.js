import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import counter from './sig-service.js';
var cnt = 0;

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn1: {toggle: true},
      btn2: {toggle: true},
      btn3: {toggle: true},
      isShowingText: false
    }

      // Toggle the state every second
      // setInterval(() => {
      //   this.setState(previousState => {
      //     return { isShowingText: !previousState.isShowingText };
      //   });
      // }, 1000);
    this.doLogin = this.doLogin.bind(this);
  }
/*
<Button onPress={this.doLogin.bind(this, 1)} title={this.btnArray.state1.toggle ? 'ON' : 'WOOF'}>
</Button>
<Button onPress={this.doLogin.bind(this, 2)} title={this.btnArray.state2.toggle ? 'ON' : 'WOOF'}>
</Button>
*/
  render() {
    return (
      <View>
        <View style={buttonStyle.buttonContainer}>
          <Button onPress={() => this.doLogin('btn1')} title={this.state.btn1.toggle ? 'ON' : 'WOOF'} />
        </View>
        <Text>{this.state.isShowingText ? '------' : ''}</Text>
        <View style={buttonStyle.buttonContainer}>
          <Button onPress={() => this.doLogin('btn2')} title={this.state.btn2.toggle ? 'ON' : 'WOOF'} />
        </View>
        <Text>{this.state.isShowingText ? '------' : ''}</Text>
        <View style={buttonStyle.buttonContainer}>
          <Button onPress={() => this.doLogin('btn3')} title={this.state.btn3.toggle ? 'ON' : 'WOOF'} />
        </View>
      </View>
    );
  }

  doLogin(id) {

    console.log('you pressed id', id);
    cnt++;
    counter.set({count: cnt});
    console.log(counter.get())

    this.setState(previousState => {
      console.log(previousState)
      var newVal = !previousState[id].toggle
      return { [id]: {toggle: newVal} };
    });
  }
}


const buttonStyle = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10
  }
});
