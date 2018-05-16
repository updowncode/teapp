import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { SplashContainer } from './containers/SplashContainer';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SplashContainer />
    </Provider>
  );
};
export default App;
