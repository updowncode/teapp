import { StackNavigator } from 'react-navigation';

import CounterScreen from './screens/CounterScreen';
import MainScreen from './screens/MainScreen';
// import LoginScreen from './containers/LoginContainer';
import LoginScreen from './screens/LoginScreen';
const MyNavigator = StackNavigator(
  {
    Login: { screen: LoginScreen,  },
    Main: {
      screen: MainScreen,
    },
    Counter: {
      screen: CounterScreen,
    },
  },
  {
    initialRouteName: 'Login',
    ////For all screens's header
    //headerMode: "none",
  }
);

export default MyNavigator;
