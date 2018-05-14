import React, { Component } from 'react';
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
const image1 = require('../../../assets/images/guide1.png');
const image2 = require('../../../assets/images/guide2.png');
const image3 = require('../../../assets/images/guide3.png');

const { width, height } = Dimensions.get('window');
interface IProps {
  navigation: NavigationScreenProp<any, any>;
}
export default class GuideView extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        horizontal={true}
      >
        <Image source={image1} style={styles.backgroundImage} />
        <Image source={image2} style={styles.backgroundImage} />
        <View style={{ flex: 1 }}>
          <Image source={image3} style={styles.backgroundImage} />
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.props.navigation.navigate('MainContainer');
              }}
            >
              <Text style={styles.btnText}>启动应用</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: width * 3,
    height: height,
  },
  backgroundImage: {
    width: width,
    height: height,
  },
  btnOut: {
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
});
