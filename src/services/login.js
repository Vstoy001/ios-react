var shwApiUrl = "https://portals.test.selfhelpworks.com/";

import React, { Component } from 'react'

import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

//import ApiService from './api-service.js';
import loginService from './api-service.js';
import singleton from './sig-service.js'

export default class LoginBtn extends Component {
  constructor(props) {
    super(props)

    this.login = this.loginHandler.bind(this);
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.login()} title="Login" />
      </View>
    )
  }

  loginHandler() {
    loginService.login();
    loginService.logout();

    singleton.set({user:'me', pass:'I'});
    console.log(singleton.get())

  }
}
