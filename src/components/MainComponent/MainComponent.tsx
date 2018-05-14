import React, { Component } from 'react';
import {LoginContainer} from '../../containers/LoginContainer';
import IStoreState from '../../store/IStoreState';
import { StackNavigator } from 'react-navigation';
import { CounterContainer } from '../../containers/CounterContainer';
import { HomeContainer } from '../../containers/HomeContainer';
import { ChartContainer } from '../../containers/ChartContainer';
import { NavigationScreenProp } from 'react-navigation';
export const MainStackNavigator = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Counter: {
      screen: CounterContainer,
    },
    Chart:{
      screen:ChartContainer,
    }
  },
  {
    initialRouteName: 'Home',
  }
);
interface IProps {
  navigation:any;
   signedIn?: boolean;
  // username?: string;
  // signinMsg?: string;
}

export class MainComponent extends Component<IProps, IStoreState> {
  static navigationOptions = { title: '', header: null };
  render() {
    if (!this.props.signedIn) {
      return <LoginContainer />;
    }
    //return <MainStackNavigator />;
     return <HomeContainer />;
  }
}
