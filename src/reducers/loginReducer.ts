import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import initialState from '../store/initialState';

export const loginReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.LOADING:
      return Object.assign({}, state, {
        ...state,
        loading: action.payload,
        signinMsg: '',
      });
    case ActionTypeKeys.LOGIN:
      return Object.assign({}, state, {
        ...state,
        loading: true,
        signinMsg: '',
      });
    case ActionTypeKeys.LOGOUT:
      return Object.assign({}, state, { ...state, signedIn: false, signinMsg: "" });
    case ActionTypeKeys.LOGINSUCCESS:
      return Object.assign({}, state, {
        ...state,
        username: action.payload.username,
        signinMsg: "",
        signedIn: true,
        loading: false,
      });
    case ActionTypeKeys.LOGINFAIL:
      return Object.assign({}, state, {
        ...state,
        signinMsg: action.payload,
        password: '',
        signedIn: false,
        loading: false,
      });
    default:
      return state;
  }
};
