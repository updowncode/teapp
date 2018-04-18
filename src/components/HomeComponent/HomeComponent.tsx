import React, { Component } from 'react';

import { Button, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import styles from './styles';
interface IMainComponentProps {
  navigation: NavigationScreenProp<any, any>;
  signedIn?: boolean;
  signinMsg?: string;
  doLogout?: () => void;
}

export default class HomeComponent extends Component<IMainComponentProps> {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state;
    return {
      headerRight: <Button title="Logout" onPress={() => params.Logout && params.Logout()} />,
    };
  };
  OnLogout = () => {
    this.props.doLogout();
  };
  componentDidMount() {
    this.props.navigation.setParams({ Logout: () => this.OnLogout() });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.signedIn ? this.props.signinMsg : ''}
        </Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Counter')}
        />
      </View>
    );
  }
}
