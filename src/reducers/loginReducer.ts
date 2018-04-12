import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types'
export const loginReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.LOGIN:
      const p = action.payload;
      return Object.assign({}, state, {
        username: p.username,
        password: p.password,
        signedIn: true,
        signinMsg: p.fullname,
      });
    // case LOGIN_USER:
    //   return { ...state, loading: true, error: '' }
    // case LOGIN_USER_SUCCESS:
    //   return { ...state, ...initialState, user: action.user }
    // case LOGIN_USER_FAIL:
    //   return { ...state, error: 'Authentication Failed.', password: '', loading: false }
    default:
      return state;
  };
};


const textChangeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.user }
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false }
    default:
      return state
  }
};

export default textChangeReducer;
