import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import styles from "./styles";
interface IMainComponentProps {
  navigation: NavigationScreenProp<any, any>;
  signedIn?: boolean;
  doLogout?: () => void;
}

export default class HomeComponent extends Component<IMainComponentProps> {
  // static navigationOptions = { header: null,};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.signedIn ? 'Signed In' : ''}
        </Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Counter')}
        />
        <Button title="Logout" onPress={() => this.props.doLogout()} />
      </View>
    );
  }
}
