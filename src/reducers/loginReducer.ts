import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';
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
    default:
      return state;
  };
};
