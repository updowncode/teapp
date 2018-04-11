import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import IStoreState from '../store/IStoreState';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement } from '../actions/counterActions';
import { signedIn } from '../selectors/counterSelector';
interface IMains {
  // navigation: NavigationScreenProp<any, any>;
  signedIn?: boolean;
  username?: string;// doLogout?: () => void;
}

class MainComp extends Component<IMains,IStoreState> {
  render() {
    if (!this.props.signedIn) {
      return (
        <View>
          <LoginScreen />
          <Text>signedIn: {this.props.signedIn}</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Select Report Type</Text>

        {/* <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Counter')}
        /> */}
      </View>
    );
  }
}

// const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
//    // doLogout:bindActionCreators(decrement, dispatch),
// });

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  //   navigation: NavigationScreenProp<any, any>
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const Mains = connect(
  (state: any) => ({
    signedIn: signedIn(state),
    username:state.login.username,
    password: state.login.password,
     signinMsg: state.login.signinMsg
  }),
  (dispatch: Dispatch<IStoreState>) => ({
    doLogout: () => dispatch(decrement()),
  }),
  mergeProps
)(MainComp);
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
