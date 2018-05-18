import React, { Component } from 'react';
import { Text } from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    const { counter } = this.state;
    return (
      <Text> { counter } </Text>
    );
  }
}
