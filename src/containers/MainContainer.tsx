import { Dispatch, connect } from 'react-redux';
import { decrement } from '../actions/counterActions';
import { signedIn } from '../selectors/counterSelector';
import IStoreState from '../store/IStoreState';
import { MainComponent } from '../components/MainComponent/MainComponent';

const mapStateToProps = (state: any) => ({
  signedIn: signedIn(state),
  username: state.login.username,
  password: state.login.password,
  signinMsg: state.login.signinMsg,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  doLogout: () => dispatch(decrement()),
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const MainContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  MainComponent
);
