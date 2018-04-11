import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import initialState from '../reducers/initialState';
import {rootReducer} from '../reducers/rootReducer';
import IStoreState from './IStoreState';

const configureStore = (data:object={}) => {
  return createStore(
    rootReducer, data,
    applyMiddleware(thunkMiddleware)
  );
};

export default configureStore;
