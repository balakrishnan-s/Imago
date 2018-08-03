import { Navigation } from 'react-native-navigation';
import store from './src/store/store';
import { registerScreens } from './src/screens/screens';
import { setInitialLayout } from './src/NavigationController';

/**
 * Wait till RNN is ready to listen and resolve
 * @returns {Promise} - Promise that resolves when RNN is ready to listen
 */
const registerNavigationListener = () => new Promise((resolve) => {
  Navigation.events().registerAppLaunchedListener(() => {
    resolve();
  });
});


async function bootstrap() {
  registerScreens(store);

  // TODO: wait for Redux-Persist + Vector Icons
  await Promise.all([registerNavigationListener()]);

  setInitialLayout();
}

/**
 * INIT function of our app
 */
bootstrap();
