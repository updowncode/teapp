import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';
import IStoreState from './IStoreState';

const configureStore = () => {
  return createStore<IStoreState>(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
};

export default configureStore;
