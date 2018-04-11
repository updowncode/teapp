import IStoreState from '../store/IStoreState';

export const counter = (state: IStoreState) => state.counter;
export const signedIn = (state: any) => state.login.signedIn;