var shwApiUrl = "https://portals.test.selfhelpworks.com/api/"

// async quizApi() {
//   const res = await fetch(shwApiUrl + 'quiz/61');
//   const data = await res.data;
//   return data.Message;
// }

// module.exports = {
//   foo: function() {
//     //return quizApi()
//     return 'bar'
//   }
// }

import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  View
} from 'react-native';

export default class QuizText extends Component {
  state = {}
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  async componentDidMount() {
    // StatusBar.setNetworkActivityIndicatorVisible(true)
    // const res = await fetch(shwApiUrl + 'quiz/61')
    // //const {data} = await res.data;
    // await this.setStateAsync({message: "not reachable"})
    // StatusBar.setNetworkActivityIndicatorVisible(false)
  }
  render() {
    return (
      <View>
        <Text>
          My Quiz is {this.state.message || 'Unknown'}
        </Text>
      </View>
    );
  }
}
