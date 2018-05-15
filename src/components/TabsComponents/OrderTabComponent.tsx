import * as React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
// const image1 = require('../../../assets/images/guide1.png');
// const image2 = require('../../../assets/images/guide2.png');
// const image3 = require('../../../assets/images/guide3.png');
export interface AppProps {
}

export default class AppComponent extends React.Component<AppProps, any> {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View>
         <Text>
           Order
         </Text>
      </View>
    );
  }
}
