import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from '../reducers/rootReducer';

const configureStore = () => {
  return createStore(
    rootReducer, 
    applyMiddleware(thunkMiddleware)
  );
};
export default configureStore;
