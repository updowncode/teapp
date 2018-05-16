import * as React from 'react';
import { Image, View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
const image1 = require('../../../assets/images/guide1.png');
const image2 = require('../../../assets/images/guide2.png');
const image3 = require('../../../assets/images/guide3.png');
const { width, height } = Dimensions.get('window');
export interface IProps {}
export interface IStates {
  swiperShow: boolean;
}
export default class ImgSwiper extends React.Component<IProps, IStates> {
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
    }, 100);
  }

  render() {
    if (this.state.swiperShow) {
      return (<View style={styles.imgView}>
        <Swiper
          style={styles.imgWrapper}
          showsButtons={false}
          autoplay={false} //Flash when Remote Debugging.
          loop={true}
        >
          <View style={styles.imgView}>
            <Image source={image1} style={styles.bannerImg} />
          </View>
          <View style={styles.imgView}>
            <Image source={image2} style={styles.bannerImg} />
          </View>
          <View style={styles.imgView}>
            <Image source={image3} style={styles.bannerImg} />
          </View>
        </Swiper></View>
      );
    } else {
      return (<Text>Loading...</Text>);
    }
  }
}

const styles = StyleSheet.create({
  imgView: {
    width:width,
    height: 200,
  },
  imgWrapper: {
    width: width,
    height: 200,
  },
  bannerImg: {
    width: width,
    height: 200,
    resizeMode: 'stretch',
  },
});
