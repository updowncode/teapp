import React, { Component } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { APIs } from '../../actions/APIs';
import styles from './styles';

interface IMainComponentProps {
  navigation: NavigationScreenProp<any, any>;
  signedIn?: boolean;
  signinMsg?: string;
  doLogout?: () => void;
}
interface AppStates {
  reportListArr: any[];

}
export default class HomeComponent extends Component<IMainComponentProps,AppStates> {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerRight: (
        <Button
          title="Logout"
          onPress={() => params.Logout && params.Logout()}
        />
      ),
    };
  };
  OnLogout = () => {
    this.props.doLogout();
  };
  componentDidMount() {
    this.props.navigation.setParams({ Logout: () => this.OnLogout() });
  }
  componentWillMount() {
    fetch(APIs.GETLIST, {
      method: 'GET',
      headers: APIs.HEADERS,
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(json) {
        let a = JSON.parse(json);
        a.maps(item=>this.state.reportListArr.push(item));
      })
      .catch(function(ex) {
        this.props.signinMsg = ex.message;
      });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.signinMsg != '' && (
          <Text style={styles.welcome}>{this.props.signinMsg} </Text>
        )}

        {/* <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Counter')}
        /> */}
        <FlatList
          data={this.state.reportListArr}
          renderItem={({ item }) => <Text  style={styles.touchable}>{item.name}</Text>}
        />
      </View>
    );
  }
}
