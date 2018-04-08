export default interface IStoreState {
  readonly counter: number;
   signedIn: boolean;
   username: string;
   password: string;
   signinMsg: string;
};