import { combineReducers } from 'redux';
import IStoreState from '../store/IStoreState';
import { counterReducer } from './counterReducer';
import { loginReducer } from './loginReducer';
import { homeReducer } from './homeReducer';
export const rootReducer = combineReducers<IStoreState>({
  counter: counterReducer,
  login: loginReducer,
  home: homeReducer,
});

   