import IStoreState from '../store/IStoreState';

const defaultState: IStoreState = {
  counter: 0,
  signedIn: false,
  username: '',
  password: '',
  signinMsg:"",
  loading: false
};

export default defaultState;
