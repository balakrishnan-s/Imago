import { Navigation } from 'react-native-navigation';
import store from '../store/store';
import reduxWrapper from '../components/hoc/reduxWrapper';
import LandingPage from './LandingPage';

/* eslint-disable import/prefer-default-export */
export function registerScreens() {
  Navigation.registerComponent('eventfinder.LandingPage', () => reduxWrapper(LandingPage, store));
}
