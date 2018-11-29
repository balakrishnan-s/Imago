import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import FavouriteScreen from './FavouriteScreen';
import MapScreen from './MapScreen';

/* eslint-disable import/prefer-default-export */
export function registerScreens(store) {
  Navigation.registerComponentWithRedux('eventFinder.FavouriteScreen', () => FavouriteScreen, Provider, store);
  Navigation.registerComponentWithRedux('eventFinder.MapScreen', () => MapScreen, Provider, store);
}
