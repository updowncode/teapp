import React from 'react';
import { Provider } from 'react-redux';
import { MainContainer } from './containers/MainContainer';
import configureStore from './store/configureStore';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider> 
  )
}
export default App;
