import { StackNavigator } from 'react-navigation';
import { CounterContainer } from './containers/CounterContainer';
import { HomeContainer } from './containers/HomeContainer';

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


