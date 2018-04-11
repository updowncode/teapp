import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { decrement, increment } from '../actions/counterActions';
import Counter from '../components/Counter';
import { counter } from '../selectors/counterSelector';
import IStoreState from '../store/IStoreState';

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  Counter
);
