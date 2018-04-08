import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface ICounterProps {
  counter?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default class Counter extends Component<ICounterProps> {
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

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#72ba3a',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  touchableText: {
    fontSize: 30,
  },
});
