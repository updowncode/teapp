import { APIs } from './APIs';
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
    let requestHeaders: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    let HHname: any = { name: user.username };

    fetch("https://b2b.toureast.com/api/heroes", {
    method: "get"
}).then(function(response) {
    return response.text()
}).then(function(data) {
    console.log(data)
    JSON.parse(data)
}).catch(function(e) {
  console.log("Oops, error");
});

    // fetch(APIs.GETLIST, {
    //   method: 'GET',
    //   headers: requestHeaders,
    //   // body: JSON.stringify(HHname),
    // }).then(
    //   response => {
    //     let resp = response.json();
        
        
    //     dispatch({
    //       type: ActionTypeKeys.LOGINSUCCESS,
    //       payload: {
    //         username: user.username,
    //         fullname: JSON.stringify(resp),
    //       },
    //     });
    //   },
    //   error => {
    //     console.log('An error occurred.', error);
    //     dispatch({
    //       type: ActionTypeKeys.LOGINFAIL,
    //       payload: error.message,
    //     });
    //   }
    // );

    // fetch('http://10.0.2.2:51796/api/heroes', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // }).then(
    //   response => {
    //     console.log('An error dfgdfg.');
    //   },
    //   error => {
    //     console.log('An error occurred.', error);
    //   }
    // );
    // setTimeout(() => {
    //   if (user.username == 'a' && user.password == 'a') {
    //     dispatch({
    //       type: ActionTypeKeys.LOGINSUCCESS,
    //       payload: {
    //         username: user.username,
    //         fullname: 'david',
    //       },
    //     });
    //   } else {
    //     dispatch({
    //       type: ActionTypeKeys.LOGINFAIL,
    //       payload: 'Auth Fail',
    //     });
    //   }
    // }, 16000);
  };
};
