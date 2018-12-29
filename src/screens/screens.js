import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import FavouriteScreen from './FavouriteScreen';
import MapScreen from './MapScreen';

/* eslint-disable import/prefer-default-export */
export function registerScreens(store) {
  Navigation.registerComponentWithRedux('imago.FavouriteScreen', () => FavouriteScreen, Provider, store);
  Navigation.registerComponentWithRedux('imago.MapScreen', () => MapScreen, Provider, store);
}
