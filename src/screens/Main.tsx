import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Dispatch, connect } from 'react-redux';
import { decrement } from '../actions/counterActions';
import MyNavigator from '../navigation';
import LoginScreen from '../screens/LoginScreen';
import { signedIn } from '../selectors/counterSelector';
import IStoreState from '../store/IStoreState';
interface IMains {
  //navigation: NavigationScreenProp<any, any>;
  signedIn?: boolean;
  username?: string;// doLogout?: () => void;
}

class MainComp extends Component<IMains,IStoreState> {
  
  render() {
    if (!this.props.signedIn) {
      return (
        <LoginScreen />
      );
    }
    return (
       <MyNavigator />
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
