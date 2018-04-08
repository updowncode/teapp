import { combineReducers } from 'redux';

import IStoreState from '../store/IStoreState';
import counterReducer from './counterReducer';
import loginReducer from './loginReducer';
import textChangeReducer from './textChange';
const rootReducer = combineReducers<IStoreState>({
  counter: counterReducer,
  login: loginReducer,
  textChange: textChangeReducer,
});
export default rootReducer;
