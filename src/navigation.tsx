import { StackNavigator } from 'react-navigation';

import CounterScreen from './screens/CounterScreen';
import {MainScreen} from './screens/MainScreen';
const MyNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Counter: {
      screen: CounterScreen,
    },
  },
  {
    initialRouteName: 'Main',
  }
);

export default MyNavigator;
