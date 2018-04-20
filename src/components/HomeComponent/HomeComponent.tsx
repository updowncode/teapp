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
      title: "Report Selection:",
      headerRight: (
        <Button title="Logout" onPress={() => params.Logout && params.Logout()} />
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
    return datas.map(itemData => {
      return (
        <ListItem
          key={itemData.id}
          onPress={() => {
            this.props.navigation.navigate('Chart', itemData);
          }}
        >
          <Icon name="ios-log-out" style={{ fontSize: 40 }} />
          <Body>
            <Text>{itemData.name}</Text>
            <Text note>
              {itemData.description}
            </Text>
          </Body>
        </ListItem>
      );
    });
  };
  render() {
    return (
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
