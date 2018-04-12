import React, { Component } from 'react';
import {LoginContainer} from '../../containers/LoginContainer';
import IStoreState from '../../store/IStoreState';
import { StackNavigator } from 'react-navigation';
import { CounterContainer } from '../../containers/CounterContainer';
import { HomeContainer } from '../../containers/HomeContainer';

export const MainStackNavigator = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Counter: {
      screen: CounterContainer,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
interface IMainContainer {
  signedIn?: boolean;
  username?: string;
}

export class MainComponent extends Component<IMainContainer, IStoreState> {
  render() {
    if (!this.props.signedIn) {
      return <LoginContainer />;
    }
    return <MainStackNavigator />;
  }
}
