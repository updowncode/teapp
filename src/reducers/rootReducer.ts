import { combineReducers } from 'redux';
import IStoreState from '../store/IStoreState';
import { counterReducer } from './counterReducer';
import { loginReducer } from './loginReducer';

export const rootReducer = combineReducers<IStoreState>({
  counter: counterReducer,
  login: loginReducer,
});

   