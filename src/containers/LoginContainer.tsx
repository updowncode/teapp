import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, usernameChanged, passwordChanged } from '../actions/loginAction';
import LoginSimple from '../components/LoginSimple';
import { signedIn } from '../selectors/signedStatus';

import IStoreState from '../store/IStoreState';

const mapStateToProps = (state: IStoreState) => ({
  signedIn: signedIn(state),
  username: state.username,
  password: state.password,
  signinMsg: state.signinMsg,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  onLogin: bindActionCreators(login, dispatch),
  onUserNameChanged: bindActionCreators(usernameChanged, dispatch),
  onPasswordChanged: bindActionCreators(passwordChanged, dispatch),
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  LoginSimple
);
