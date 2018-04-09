//import * as React from 'react';
import React, { Component } from 'react';
import { Image, Platform,TouchableOpacity,TextInput } from 'react-native';
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
class LoginSimple extends Component<ILogin, AppStates> {//<ILoginProps>
  constructor(props) {
    super(props)
    this.onLogin = this.onLogin.bind(this);
		// init local state
    this.state = {
      username: "",
      password: ""
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
    this.props.doLogin(this.state.username,this.state.password);

  }

  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            {/* <Icon name="flash" style={{ fontSize: 104 }} /> */}
            <Image
              source={require('../../assets/images/te-logo.png')}
              // style={{ width: 422 / 4, height: 86 / 4 }}
            />
            <View padder>
              <Text
                style={{ color: Platform.OS === 'ios' ? '#000' : '#FFF' }}
              /> 
            </View>
            <Title>Daily Report</Title>
            <View padder>
              <Text
                style={{ color: Platform.OS === 'ios' ? '#000' : '#FFF' }}
              />
            </View>
          </Body>
        </Header>
        <Content>

        <Input
            label={'Username'}
            placeholder={'Username'}
             //onChangeText={this.onUserNameChange.bind(this)}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
            //value={this.props.username}
          />

          <Input
            label={'Password'}
            placeholder={'Password'}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            // onChangeText={this.onPasswordChange.bind(this)}
    
            // value={this.props.password}
            secureTextEntry={true}
          />
            <Text style={{ fontSize: 18, color: 'red' , alignSelf: 'center' }}>
          {/* {this.props.signinMsg} */}
        </Text>
        {/* <Button block onPress={() => this.props.doLogin(this.state.username, this.state.password)}>
          Login1
        </Button> */}
        <Button block onPress={() => this.onLogin(this.state.username, this.state.password)}><Text>Login</Text></Button>
          <View padder>
         
               {/* <Button block
            // onPress={() => {
            //   this.props.doLogin(this.props.username, this.props.password)
            // }}
            onPress={
              this.onLogin.bind(this, {username: this.props.username, password:this.props.password})
            } */
            // onPress={
            //   this.onLogin.bind(this, {username: this.props.username, password:this.props.password})
            // }
            // onPress={this.props.doLogin()}
            // >
            
            //   <Text>Login</Text>
            // </Button> 

            }
  
          </View>
        </Content>
        <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <View
            style={{ alignItems: 'center', opacity: 0.5, flexDirection: 'row' }}
          >
            <View padder>
              <Text style={{ color: '#000', fontSize:12 }}>
                ©Copyright 2018 Tour East Holidays (Canada) Inc.
              </Text>
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default LoginSimple;
