import { connect } from 'react-redux';
import { MainComponent } from '../components/MainComponent/MainComponent';
import { StackNavigator } from 'react-navigation';
import { CounterContainer } from '../containers/CounterContainer';
import { HomeContainer } from '../containers/HomeContainer';
import { ChartContainer } from '../containers/ChartContainer';
import { LoginContainer } from '../containers/LoginContainer';
import SwiperGuide from '../components/SplashComponent/SwiperGuideComponent';
import { MainContainer } from './MainContainer';
import TabNavContainer from './TabNavContainer';
import GuideView from '../components/SplashComponent/GuideViewComponent';
import Splash from '../components/SplashComponent/SplashComponent';

export const SplashStackNavigator = StackNavigator(
    {
      SwiperGuide:{
        screen: SwiperGuide,
      },
      GuideView: {
        screen: GuideView,
      },
      TabNavContainer:{
        screen: TabNavContainer,
      },
      MainContainer: {
        screen: MainContainer,
      },
      Splash: {
        screen: Splash,
      },
    },
    {
      initialRouteName: 'Splash',
    }
  );

const mergeProps = (
  stateProps: object,
  dispatchProps: object,
  ownProps: object
) => ({ ...ownProps, ...stateProps, ...dispatchProps });

export const SplashContainer = connect(null, null, mergeProps)(
    SplashStackNavigator
);
