import keys from './ActionTypeKeys';
import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
  } from './types'
export interface ILoginAction {
  readonly type: keys.LOGIN;
}
export function login(): ILoginAction {
  return {
    type: keys.LOGIN,
  };
}

export const usernameChanged = username => ({
    type: USERNAME_CHANGED,
    username
  })
  
  export const passwordChanged = password => ({
    type: PASSWORD_CHANGED,
    password
  })
  