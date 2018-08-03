import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import LandingPage from './LandingPage';

/* eslint-disable import/prefer-default-export */
export function registerScreens(store) {
  Navigation.registerComponentWithRedux('eventfinder.LandingPage', () => LandingPage, Provider, store);
}
