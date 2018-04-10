import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MyNavigator from './navigation';
import {MainScreen} from './screens/MainScreen';
import {Mains} from './screens/Main';
import configureStore from './store/configureStore';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      {/* <MyNavigator /> */}
      <Mains />
    </Provider>
  )
}

export default App;

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         {/* <MyNavigator /> */}
//         <MainScreen />
//       </Provider>
//     );
//   }
// }
