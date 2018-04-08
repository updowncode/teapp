//import * as React from 'react';
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
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
//import styles from "./styles";
export interface ILoginProps {
    signedIn?: boolean,
    username?: string,
    password?: string,
    signinMsg?: string,

    onLogin?: () => void;
    onUserNameChanged?: (username) => void;
    onPasswordChanged?: (password) => void;
  }
class LoginSimple extends Component<ILoginProps> {
  onUserNameChange(text) {
    this.props.onUserNameChanged(text);
  }

  onPasswordChange(text) {
    this.props.onPasswordChanged(text);
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
            onChangeText={this.onUserNameChange.bind(this)}
            value={this.props.username}
          />
          <Input
            label={'Password'}
            placeholder={'Password'}
            onChangeText={this.onPasswordChange.bind(this)}
            secureTextEntry={true}
            value={this.props.password}
          />
            <Text style={{ fontSize: 18, color: 'red' , alignSelf: 'center' }}>
          {this.props.signinMsg}
        </Text>
          <View padder>
            <Button block  onPress={this.props.onLogin}>
              <Text>Login</Text>
            </Button>

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
