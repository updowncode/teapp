import { Body, Button, Container, Content, Footer, Header, Icon, Input, Text, Title, View } from 'native-base';
import React, { Component } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
export interface ILoginComponent {
  username?: string;
  password?: string;
  loading: boolean;
  signedIn: boolean;
  signinMsg?: string;
  onUserNameChanged?: (username) => void;
  onPasswordChanged?: (password) => void;
  doLogin?: (username: string, password: string) => void;
}
export interface AppStates {
  username: string;
  password: string;
}
class LoginComponent extends Component<ILoginComponent, AppStates> {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      username: this.props.username,
      password: this.props.password,
    };
  }
  onLogin(username, password) {
    this.props.doLogin(username, password);
  }

  render() {
    const ActivityIndicatorLoading = this.props.loading;
    const ShowActivityIndicator = ActivityIndicatorLoading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : null;

    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <Icon name="document" style={{ fontSize: 104, color: 'white' }} />
            {/* <Image source={require('../../../assets/images/te-logo.ico')} style={{ width: 80, height: 80 }} /> */}
            <Title style={{ color: Platform.OS === 'ios' ? '#000' : '#FFF' }}>
              Daily Report
            </Title>
          </Body>
        </Header>
        <Content>
          <Input
            label={'Username'}
            placeholder={'Username'}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />

          <Input
            label={'Password'}
            placeholder={'Password'}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry={true}
          />
          <Text style={{ fontSize: 18, color: 'red', alignSelf: 'center' }} />
          <Button
            block
            onPress={() =>
              this.onLogin(this.state.username, this.state.password)
            }
          >
            <Text>Login</Text>
          </Button>
          {ShowActivityIndicator}
          <Text>
            {this.props.signedIn == false ? this.props.signinMsg : ''}
          </Text>
          <View padder />
        </Content>
        <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <View
            style={{ alignItems: 'center', opacity: 0.5, flexDirection: 'row' }}
          >
            <View padder>
              <Text style={{ color: '#000', fontSize: 12 }}>
                ©Copyright 2018 Tour East Holidays (Canada) Inc.
              </Text>
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}
export default LoginComponent;
