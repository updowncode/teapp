import { Body, Container, Content, Icon, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import styles from './styles';

interface IHomeComponentProps {
  navigation: NavigationScreenProp<any, any>;
  signedIn?: boolean;
  signinMsg?: string;
  doLogout?: () => void;
  doGetMenuItems?: () => void;
  menuItems?: any;
}
export default class HomeComponent extends Component<IHomeComponentProps> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerRight: (
        <Button title="Logout" onPress={() => params.Logout && params.Logout()}>
          Logout
        </Button>
      ),
    };
  };
  OnLogout = () => {
    this.props.doLogout();
  };
  componentDidMount() {
    this.props.navigation.setParams({ Logout: () => this.OnLogout() });
    this.props.doGetMenuItems();
  }
  listItems = datas => {
    return datas.map(data => {
      return (
        <ListItem
          key={data.id}
          onPress={() => {
            this.props.navigation.navigate('Counter');
          }}
        >
          <Icon name="document" style={{ fontSize: 80, color: 'white' }} />
          <Body>
            <Text>{data.name}</Text>
            <Text note>
              {data.name}/{data.name}
            </Text>
          </Body>
        </ListItem>
      );
    });
  };
  render() {
    return (
      // <View style={styles.container}></View>
      <Container>
        <Content>
          {this.props.signinMsg != '' && (
            <Text style={styles.welcome}>{this.props.signinMsg} </Text>
          )}
          {this.props.menuItems && (
            <List>{this.listItems(this.props.menuItems)}</List>
          )}
        </Content>
      </Container>
    );
  }
}
