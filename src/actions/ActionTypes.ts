
import keys from './ActionTypeKeys';
export interface ILoginAction {
    readonly type: keys.LOGIN;
    payload
  }
  export interface IDecrementAction {
    readonly type: keys.DECREMENT;
  }
  
  export interface IIncrementAction {
    readonly type: keys.INCREMENT;
  }
  
type ActionTypes = IDecrementAction | IIncrementAction | ILoginAction;

export default ActionTypes;
