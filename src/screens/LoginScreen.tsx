import React, { Component } from 'react';

import LoginContainer from '../containers/LoginContainer';

interface ILoginProps {}
export default class LoginScreen extends Component<ILoginProps> {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <LoginContainer />;
  }
}
