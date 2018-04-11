// import React, { Component } from 'react';
// import MainContainer from '../containers/MainContainer';
// import { NavigationScreenProp } from 'react-navigation';
// import Main
// export default class MainScreen extends Component {
//   render() {
//     return <MainContainer />;
//   }
// }
import { Dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement } from '../actions/counterActions';
import MainComponent from '../components/MainComponent';
import IStoreState from '../store/IStoreState';


const mapStateToProps = (state: any) => ({
    signedIn: state.login.signedIn
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
    doLogout:bindActionCreators(decrement, dispatch),
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object,// 
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const MainScreen = connect(mapStateToProps, mapDispatchToProps, mergeProps)(
    MainComponent
);
