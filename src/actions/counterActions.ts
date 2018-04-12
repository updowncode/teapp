import keys from './ActionTypeKeys';
import {IDecrementAction, IIncrementAction} from './ActionTypes';

export function decrement(): IDecrementAction {
  return {
    type: keys.DECREMENT,
  };
}

export function increment(): IIncrementAction {
  return {
    type: keys.INCREMENT,
  };
}
