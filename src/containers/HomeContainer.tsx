import { Dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMenuItems } from '../actions/homeAction';
import { logout } from '../actions/loginAction';
import HomeComponent from '../components/HomeComponent/HomeComponent';
import IStoreState from '../store/IStoreState';

const mapStateToProps = (state: any) => ({
  signedIn: state.login.signedIn,
  signinMsg: state.login.signinMsg,
  menuItems: state.home.menuItems,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  doLogout: bindActionCreators(logout, dispatch),
  doGetMenuItems: bindActionCreators(getMenuItems, dispatch), 
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
