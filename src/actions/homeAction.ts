import APIs from './APIs';
import ActionTypeKeys from './ActionTypeKeys';
export const getMenuItems = () => {
  return (dispatch, getState) => {
    let state = getState();
    if (state.login.username == 'a') {
      dispatch({
        type: ActionTypeKeys.MENUITEMS,
        payload: APIs.datas,
      });
    } else {
      fetch(APIs.GETLIST, {
        method: 'GET',
        headers: APIs.HEADERS,
      })
        .then(function(response) {
          return response.text();
        })
        .then(function(json) {
          let a = JSON.parse(json);
          dispatch({
            type: ActionTypeKeys.MENUITEMS,
            payload: a,
          });
        })
        .catch(function(ex) {
          console.log(ex.message);
        });
    }
  };
};
