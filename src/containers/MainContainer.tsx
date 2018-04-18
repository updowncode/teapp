import { connect } from 'react-redux';
import { MainComponent } from '../components/MainComponent/MainComponent';
import { signedIn } from '../selectors/counterSelector';

const mapStateToProps = (state: any) => ({
  signedIn: signedIn(state),
  username: state.login.username,
  password: state.login.password,
  signinMsg: state.login.signinMsg,
});
const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const MainContainer = connect(mapStateToProps, null, mergeProps)(
  MainComponent
);
