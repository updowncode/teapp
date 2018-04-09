import keys from './ActionTypeKeys';
import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
  } from './types'
export interface ILoginAction {
  readonly type: keys.LOGIN;
}
// export function login(): ILoginAction {
//   return {
//     type: keys.LOGIN,
//   };
// }
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
      dispatch({
        type: keys.LOGIN,
        payload: {
          username: username,
          password: password,
          fullname: "david"
        }})
      // if (username === 'aa' && password === 'aa') {
      //   dispatch({
      //     type: keys.LOGIN,
      //     payload: {
      //       username: username,
      //       password: password,
      //       fullname: "david"
      //     }
      //   })
      // }

      // turn loading animation off
      //dispatch(actions.app.loading(false))
    }, 3000)
  }
}
export const usernameChanged = username => ({
    type: USERNAME_CHANGED,
    username
  })
  
  export const passwordChanged = password => ({
    type: PASSWORD_CHANGED,
    password
  })
  