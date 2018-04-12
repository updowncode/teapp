import keys from './ActionTypeKeys';

import {
    LOGIN,
  } from './types'
  import * as types from './types'

  /**
   * Set loading status on/off
   * @param {boolean} yes Loading status
   */
  export const loading = (yes: boolean = true) => {
    return {
      type: types.SET_LOADING,
      payload: yes
    }
  }
  
export const login = (username: string, password: string) => {
  // async call
  return dispatch => {
   
    // turn loading animation on
    // by dispacthing `loading` action from module `app`.
    // yes, each action can interact with another module actions.
    //dispatch(actions.app.loading())

    // simulate ajax login
    // in real world you can use `fetch` to make ajax request.
    setTimeout(() => {
      //dispatch(NavigationActions.navigate({ routeName: 'Main' }));
      dispatch({
        type: keys.LOGIN,
        payload: {
          username: username,
          password: password,
          fullname: "david"
        }});
       
      // if (username === 'aa' && password === 'aa') {
      //   dispatch({
      //     type: keys.LOGIN,
      //     payload: {
      //       username: username,
      //       password: password,
      //       fullname: "david"sadqwq
      //     }
      //   })
      // }

      // turn loading animation off
      //dispatch(actions.app.loading(false))
      // NavigationActions.navigate({ 
      //   routeName: initialRouteName, 
      //   params, 
      // }); 
     
    }, 3000)
  }
}

  export const loginAction = (payload) => ({
    type: LOGIN,
    payload
  })
  