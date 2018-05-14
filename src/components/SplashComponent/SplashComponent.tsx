import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { MainContainer } from '../../containers/MainContainer';
import { StackNavigator } from 'react-navigation';
import GuideView from './GuideViewComponent';
import GetSetStorge from '../../utils/LocalStorge';
import { NavigationScreenProp } from 'react-navigation';
const splashImg = require('../../../assets/images/flashloading.png');
const { width, height } = Dimensions.get('window');
interface IProps {
    navigation: NavigationScreenProp<any, any>;
  }
export interface IStates {
  bounceValue: Animated.Value;
  timer: any;
}
//http://www.cnblogs.com/gdsblog/p/7406660.html
export default class Splash extends Component<IProps, IStates> {
  constructor(props) {
    super(props);
    // this.onSplash = this.onSplash.bind(this);
    this.state = {
      bounceValue: new Animated.Value(1),
      timer: Function
    };
  }
  onSplash = () => {
    new GetSetStorge()
    .getStorgeAsync('isFrist')
    .then(result => {
      if (result == null || result == '') {
        this.props.navigation.navigate('GuideView');

        new GetSetStorge().setStorgeAsync('isFrist', 'true');

      } else {
        this.props.navigation.navigate('MainContainer');

      }
    })
    .catch(error => {
      console.log('Exception:' + error);
    });
  }

  static navigationOptions = { title: 'Welcome', header: null };
  componentDidMount() {

    Animated.timing(this.state.bounceValue, {
      toValue: 1.2,
      duration: 1000,
    }).start(); 
    this.setState({ timer: setTimeout(this.onSplash, 3000) });
  }
  componentWillUpdate() {
    clearTimeout(this.state.timer);
  }
  render() {
    return (
      <Animated.Image
        style={{
          width: width,
          height: height,
          transform: [{ scale: this.state.bounceValue }],
        }}
        source={splashImg}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
