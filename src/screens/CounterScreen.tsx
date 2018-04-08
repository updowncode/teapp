import React, { Component } from 'react';

import CounterContainer from '../containers/CounterContainer';

interface ICounterProps {}
export default class CounterScreen extends Component<ICounterProps> {
  render() {
    return <CounterContainer />;
  }
}
