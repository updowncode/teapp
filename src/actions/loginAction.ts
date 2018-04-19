import APIs from './APIs';
import ActionTypeKeys from './ActionTypeKeys';
import { ILogoutAction } from './ActionTypes';
export function logout(): ILogoutAction {
  return {
    type: ActionTypeKeys.LOGOUT,
  };
}
export const login = (user: any) => {
  return dispatch => {
    dispatch({
      type: ActionTypeKeys.LOADING,
      payload: true,
    });
    if (user.username == 'a') {
      //Mock Data
      setTimeout(function() {
        dispatch({
          type: ActionTypeKeys.LOGINSUCCESS,
          payload: {
            username: user.username,
            fullname: user.username,
          },
        });
      }, 2000);
    } else {
      fetch(APIs.LOGIN, {
        method: 'POST',
        headers: APIs.HEADERS,
        body: JSON.stringify(user),
      })
        .then(function(response) {
          return response.text();
        })
        .then(function(json) {
          var ret = JSON.parse(json);
          if (ret.Status == 'success') {
            dispatch({
              type: ActionTypeKeys.LOGINSUCCESS,
              payload: {
                username: user.username,
                fullname: user.username,
              },
            });
          } else {
            var error = new Error(ret.ReturnMessage || ret.Message);
            throw error;
          }
        })
        .catch(function(ex) {
          dispatch({
            type: ActionTypeKeys.LOGINFAIL,
            payload: ex.message,
          });
        });
    }
  };
};
