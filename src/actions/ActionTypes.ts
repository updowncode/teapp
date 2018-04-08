import { IDecrementAction, IIncrementAction } from './counterActions';
import { ILoginAction } from './loginAction';
type ActionTypes = IDecrementAction | IIncrementAction | ILoginAction;

export default ActionTypes;
