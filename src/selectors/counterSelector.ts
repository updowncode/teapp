import IStoreState from '../store/IStoreState';

export const counter = (state: IStoreState) => state.counter;
export const signedIn = (state: IStoreState) => state.signedIn;