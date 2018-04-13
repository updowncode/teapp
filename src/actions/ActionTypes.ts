import keys from './ActionTypeKeys';

export interface IDecrementAction {
  readonly type: keys.DECREMENT;
}

export interface IIncrementAction {
  readonly type: keys.INCREMENT;
}
export interface ILoginAction {
  readonly type: keys.LOGIN;
  payload;
}
export interface ILoginSuccessAction {
  readonly type: keys.LOGINSUCCESS;
  payload;
}
export interface ILoginFailAction {
  readonly type: keys.LOGINFAIL;
  payload;
}
export interface ILoadingAction {
  readonly type: keys.LOADING;
  payload;
}
export interface ILogoutAction {
  readonly type: keys.LOGOUT;
}
type ActionTypes =
  | IDecrementAction
  | IIncrementAction
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailAction
  | ILoadingAction
  | ILogoutAction;

export default ActionTypes;
