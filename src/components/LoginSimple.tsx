//import * as React from 'react';
import React, { Component } from 'react';
import { StyleSheet,Image, Platform,TouchableOpacity,TextInput } from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Icon,
  Footer,
  Input,
} from 'native-base'; 
//import styles from "../components/LoginComponent/styles";
// export interface ILoginProps {
//     signedIn?: boolean,
//     username?: string,
//     password?: string,
//     signinMsg?: string,

//     onLogin?: () => void;
//     onUserNameChanged?: (username) => void;
//     onPasswordChanged?: (password) => void;
//   }


  export interface ILogin {
    username?: string,
    password?: string,
    onUserNameChanged?: (username) => void;
    onPasswordChanged?: (password) => void;
    doLogin?: (username: string, password: string) => void;
  }
  export interface AppStates {
    username: string; 
    password: string;
  }
class LoginSimple extends Component<ILogin,AppStates> {//<ILoginProps>
  constructor(props) {
    super(props)
    this.onLogin = this.onLogin.bind(this);
		// init local state
    this.state = {
      username: this.props.username,
      password: this.props.password
    }
  }
  onUserNameChange(text) {
   // this.state =Object.assign({}, this.state, { username: text })
    this.props.onUserNameChanged(text);

  }

  onPasswordChange(text) {
  //  this.state=Object.assign({}, this.state, { password: text })
    this.props.onPasswordChanged(text);
  }
  // onLogin(username, password){
  //   this.props.doLogin(username, password);

  // }
  onLogin(username, password) {
    console.log('Username:', this.state.username);
    console.log('Password:', this.state.password);
    this.props.doLogin(username,password);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
         <TextInput
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
          <Button block onPress={() => this.onLogin(this.state.username, this.state.password)}><Text>Login</Text></Button>
          <Text>username: {this.props.username}</Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})

export default LoginSimple;
