import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet,Animated,Dimensions } from 'react-native';
import GetSetStorge from '../../utils/LocalStorge';
const splashImg = require('../../../assets/images/flashloading.png');
const { width, height } = Dimensions.get('window');
export interface IStates {
  bounceValue: number;
}
export default class splashView extends  React.Component<any, IStates> {
    constructor(props) {
        super(props);
      
        this.setState({ bounceValue: new Animated.Value(1) })
        
        this.state = {  
            bounceValue: new Animated.Value(1)
        };
      
    }
    componentDidMount() {
        Animated.timing(
         // this.setState({ bounceValue: { toValue: 1.2, duration: 1000 } })
         this.state.bounceValue, { toValue: 1.2, duration: 1000 }
        ).start();
        this.timer = setTimeout(() => {
            GetSetStorge.getStorgeAsync('isFrist').then((result) => {
                if (result == null || result == '') {
                    //第一次启动 
                    this.props.navigation.navigate('guideView');
                    GetSetStorge.setStorgeAsync('isFrist', 'true');
                } else {
                    //第二次启动s
                    this.props.navigation.navigate('MyTabNavigator');
                }
            }).catch((error) => {
                console.log('系统异常' + error);
            });
        }, 1000);

    }
    componentWillUpdate = () => {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <Animated.Image
                style={{
                    width: width,
                    height: height,
                    transform: [{ scale: this.state.bounceValue }]
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


