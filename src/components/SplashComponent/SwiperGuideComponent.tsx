import * as React from 'react';
import { Component } from 'react';
import { Image, View, StyleSheet, Dimensions,Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { NavigationScreenProp } from 'react-navigation';
const image1 = require('../../../assets/images/guide1.png');
const image2 = require('../../../assets/images/guide2.png');
const image3 = require('../../../assets/images/guide3.png');
const { width, height } = Dimensions.get('window');
export interface IProps {
  navigation: NavigationScreenProp<any, any>;
}
export interface IStates {
  swiperShow: boolean;
}
export default class SwiperGuide extends Component<IProps, IStates> {
  constructor(props) {
    super(props);
    this.state = {
      swiperShow: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swiperShow: true,
      });
    }, 0);
  }
  static navigationOptions = { title: '', header: null };
  render() {
    if (this.state.swiperShow) {
      return (
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={false}
          activeDotStyle={{ backgroundColor: '#ff7454', width: 10, height: 10 }}
        >
          <View style={styles.slide1}>
            {/* <Text style={styles.text}>Hello</Text> */}

            <Image source={image1} style={styles.backgroundImage} />
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  this.props.navigation.navigate('TabNavContainer');
                }}
              >
                <Text style={styles.btnText}>启动应用</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Swiper>
      );
    } else {
      return (
        <View style={styles.slide1}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  wrapper: {},
  container: {
    position: 'absolute',
    top: 0,
    bottom: 100,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: width,
    height: height,
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: '#90ee90',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 550,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
