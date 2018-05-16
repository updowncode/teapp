import * as React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { NavigationScreenProp } from 'react-navigation';
export interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class SwiperGuide extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello</Text>
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
