import * as React from 'react';
import { Image, Platform,TouchableOpacity } from 'react-native';
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
  
} from 'native-base';
//import styles from "./styles";
export interface Props {
  loginForm: any;
  onLogin: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            {/* <Icon name="flash" style={{ fontSize: 104 }} /> */}
            <Image
              source={require('../../../assets/images/te-logo.png')}
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
          {this.props.loginForm}
          <View padder>
          <TouchableOpacity onPress={() => this.props.onLogin()}>
      <View>
        <Text>Login</Text>
      </View>
    </TouchableOpacity>
            {/* <Button block onPress={() => this.props.onLogin()}>
              <Text>Login</Text>
            </Button> */}
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

export default Login;
