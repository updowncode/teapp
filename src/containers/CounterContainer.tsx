import { Dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment } from '../actions/counterActions';
import CounterComponent from '../components/CounterComponent/CounterComponent';
import { counter } from '../selectors/counterSelector';

const mapStateToProps = (state: any) => ({
  counter: counter(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onDecrement: bindActionCreators(decrement, dispatch),
  onIncrement: bindActionCreators(increment, dispatch),
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CounterComponent);
