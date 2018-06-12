import { Navigation } from 'react-native-navigation';
import WelcomeScreen from './WelcomeScreen';

/* eslint-disable import/prefer-default-export */
export function registerScreens() {
  Navigation.registerComponent('eventfinder.WelcomeScreen', () => WelcomeScreen);
}
