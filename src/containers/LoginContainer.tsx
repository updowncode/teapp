import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, usernameChanged, passwordChanged } from '../actions/loginAction';
import LoginSimple from '../components/LoginSimple';
import { signedIn } from '../selectors/counterSelector';

import IStoreState from '../store/IStoreState';
import LoginFirst from '../components/loginfirst'

//import * as React from 'react';
// import React, { Component } from 'react';
// import { Image, Platform,TouchableOpacity,TextInput } from 'react-native';
// import {
//   Container,
//   Content,
//   Header,
//   Body,
//   Title,
//   Button,
//   Text,
//   View,
//   Icon,
//   Footer,
//   Input,
// } from 'native-base'; 
const mapStateToProps = (state: any) => ({
   signedIn: signedIn(state),
  username: state.login.username,
  password: state.login.password,
   signinMsg: state.login.signinMsg,
//loading: false
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
 // onLogin: bindActionCreators(login, dispatch),
  //  onUserNameChanged: bindActionCreators(usernameChanged, dispatch),
  //  onPasswordChanged: bindActionCreators(passwordChanged, dispatch),
   doLogin: bindActionCreators((username, password) =>login(username, password), dispatch),
//doLogin: (username, password) =>dispatch(login(username, password))
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginSimple);

