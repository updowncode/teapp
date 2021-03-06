import { Dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/loginAction';
import LoginComponent from '../components/LoginComponent/LoginComponent';
import { signedIn } from '../selectors/counterSelector';
import IStoreState from '../store/IStoreState';
const mapStateToProps = (state: any) => ({
   signedIn: signedIn(state),
  username: state.login.username,
  password: state.login.password,
   signinMsg: state.login.signinMsg,
  loading: state.login.loading
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  doLogin: bindActionCreators((username, password) =>login({username, password}), dispatch), 
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginComponent);

