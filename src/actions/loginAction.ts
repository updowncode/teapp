import ActionTypeKeys from './ActionTypeKeys';
import { ILogoutAction } from './ActionTypes';

export function logout(): ILogoutAction {
  return {
    type: ActionTypeKeys.LOGOUT,
  };
}

export const login = (username: string, password: string) => {
  return dispatch => {
    dispatch({
      type: ActionTypeKeys.LOADING,
      payload: true,
    });
    setTimeout(() => {
      if (username == 'a' && password == 'a') {
        dispatch({
          type: ActionTypeKeys.LOGINSUCCESS,
          payload: {
            username: username,
            fullname: 'david',
          },
        });
      } else {
        dispatch({
          type: ActionTypeKeys.LOGINFAIL,
          payload: 'Auth Fail',
        });
      }
    }, 16000);
    // turn loading animation on
    // by dispacthing `loading` action from module `app`.
    // yes, each action can interact with another module actions.
    //dispatch(actions.app.loading())

    // simulate ajax login
    // in real world you can use `fetch` to make ajax request.
  };
};
