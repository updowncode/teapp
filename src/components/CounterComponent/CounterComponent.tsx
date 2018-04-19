import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
export interface ICounterProps {
  navigation:any;
  counter?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default class CounterComponent extends Component<ICounterProps> {
  componentDidMount() {

    var id = this.props.navigation.state.params.id;
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this.props.onDecrement}
        >
          <Text style={styles.touchableText}> - </Text>
        </TouchableOpacity>
        
        <Text style={styles.text}>{this.props.counter.toString()}</Text>

        <TouchableOpacity
          style={styles.touchable}
          onPress={this.props.onIncrement}
        >
          <Text style={styles.touchableText}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
