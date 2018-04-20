import { Dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/Charts/Chart';

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
});

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const ChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Chart);
