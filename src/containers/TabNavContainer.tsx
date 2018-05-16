import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import { connect } from 'react-redux';
import TabNavigator from 'react-native-tab-navigator';
import { NavigationScreenProp } from 'react-navigation';
import AirTab from '../components/TabsComponents/AirTabComponent';
import TourTab from '../components/TabsComponents/TourTabComponent';
import OrderTab from '../components/TabsComponents/OrderTabComponent';
import ProfileTab from '../components/TabsComponents/ProfileTabComponent';
import { NavigationActions } from 'react-navigation';
export interface IState {
  selectedTab?: any;
}

export interface IProps {
  // route: any;
  // navigator:any;
  navigation: NavigationScreenProp<any, any>;
}
// const resetAction = NavigationActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({ routeName: 'TabNavContainer' })],
// });
class TabNavComponent extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'air',
    };
    //this.props.navigation.dispatch(resetAction);
  }

  static navigationOptions = { title: '', header: null };
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={styles.tab}>
          <TabNavigator.Item
            selected={this.state.selectedTab == 'air'}
            title="Flight"
            selectedTitleStyle={{ color: '#FF0000' }}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('../../assets/images/tab/tab_discovery_n.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('../../assets/images/tab/tab_discovery_p.png')}
              />
            )}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'air' })}
          >
            <AirTab />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab == 'tour'}
            title="Tour"
            selectedTitleStyle={{ color: '#FF0000' }}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('../../assets/images/tab/tab_discovery_n.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('../../assets/images/tab/tab_discovery_p.png')}
              />
            )}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tour' })}
          >
            <TourTab />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab == 'order'}
            title="Order"
            selectedTitleStyle={{ color: '#FF0000' }}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('../../assets/images/tab/tab_messagecenter_n.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('../../assets/images/tab/tab_messagecenter_p.png')}
              />
            )}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'order' })}
          >
            <OrderTab />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="My Account"
            selectedTitleStyle={{ color: '#FF0000' }}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('../../assets/images/tab/tab_contact_n.png')}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={require('../../assets/images/tab/tab_contact_p.png')}
              />
            )}
            renderBadge={() =>
              1 == 1 ? (
                <View style={styles.badgeView}>
                  <Text style={styles.badgeText}>1</Text>
                </View>
              ) : null
            }
            onPress={() => this.setState({ selectedTab: 'profile' })}
          >
            <ProfileTab />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const mapState2Props = state => {
  return {};
};

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export default connect(mapState2Props, null, mergeProps)(TabNavComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tab: {
    height: 55,
    alignItems: 'center',
    backgroundColor: '#f4f5f6',
  },
  tabIcon: {
    width: 18,
    height: 18,
  },
  badgeView: {
    width: 10,
    height: 10,
    backgroundColor: '#f85959',
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 5,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 8,
  },
});
