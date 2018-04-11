import { Dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement } from '../actions/counterActions';
import HomeComponent from '../components/HomeComponent/HomeComponent';
import IStoreState from '../store/IStoreState';

const mapStateToProps = (state: any) => ({
  signedIn: state.login.signedIn,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  doLogout: bindActionCreators(decrement, dispatch),
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object, //
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HomeComponent);