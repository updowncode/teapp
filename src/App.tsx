import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import configureStore from './store/configureStore';
import Splash from './components/SplashComponent/SplashComponent';
import { MainContainer } from './containers/MainContainer';
import { CounterContainer } from './containers/CounterContainer';
import { HomeContainer } from './containers/HomeContainer';
import { LoginContainer } from './containers/LoginContainer';
import { ChartContainer } from './containers/ChartContainer';
import { SplashContainer } from './containers/SplashContainer';
import GuideView from './components/SplashComponent/GuideViewComponent';
import TabNavContainer from './containers/TabNavContainer';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SplashContainer />
    </Provider>
  );
};
export default App;
