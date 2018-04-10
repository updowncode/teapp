import React, { Component } from 'react';

import LoginContainer from '../containers/LoginContainer';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
 
  render() {
    return <LoginContainer/>;
  }
}
