import React, { Component } from 'react';
import { Dispatch, connect } from 'react-redux';
import { decrement } from '../actions/counterActions';
import { MainStackNavigator } from '../MainStackNavigator';
import {LoginContainer} from '../containers/LoginContainer';
import { signedIn } from '../selectors/counterSelector';
import IStoreState from '../store/IStoreState';
interface IMainContainer {
  signedIn?: boolean;
  username?: string;
}

class MainComponent extends Component<IMainContainer, IStoreState> {
  render() {
    if (!this.props.signedIn) {
      return <LoginContainer />;
    }
    return <MainStackNavigator />;
  }
}
const mapStateToProps = (state: any) => ({
  signedIn: signedIn(state),
  username: state.login.username,
  password: state.login.password,
  signinMsg: state.login.signinMsg,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  doLogout: () => dispatch(decrement()),
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const MainContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  MainComponent
);
