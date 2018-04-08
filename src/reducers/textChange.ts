import initialState from './initialState';
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types'
const textChangeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.username }
    case PASSWORD_CHANGED:
      return { ...state, password: action.password }
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
