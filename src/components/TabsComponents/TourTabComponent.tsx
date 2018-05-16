import * as React from 'react';
import { View,Text, } from 'react-native';

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
           Tour
         </Text>
      </View>
    );
  }
}
