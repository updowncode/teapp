import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
interface IMainComponentProps {
  navigation: NavigationScreenProp<any, any>;
  signedIn?: boolean;
  doLogout?: () => void;
}

export default class MainComponent extends Component<IMainComponentProps> {
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#72ba3a',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});
