import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';
import IStoreState from '../store/IStoreState';

const loginReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.LOGIN:
      const p = action.payload;
      const newState = Object.assign({}, state, {
        username: p.username,
        password: p.password,
        signedIn: true,
        signinMsg: p.fullname,
      });
      return newState;
    default:
      return state;
  }
};

// const onLogin = (state: IStoreState) => {};

export default loginReducer;
