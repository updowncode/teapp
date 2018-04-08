import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';
import IStoreState from '../store/IStoreState';

const loginReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.LOGIN:
      return onLogin(state);
    default:
      return state;
  }
};

const onLogin = (state: IStoreState) => {
  if (!state.signedIn) {
    let newState = {};
    if (state.username == 'aaa' && state.password == 'aaa') {
      newState = Object.assign({}, state, { signedIn: true });
    } else {
      newState = Object.assign({}, state, {
        signinMsg: 'login fail',
      });
    }
    return newState;
  }

  return state;
};

export default loginReducer;
