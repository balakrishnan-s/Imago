import { Navigation } from 'react-native-navigation';
import { persistStore as persistStoreRaw } from 'redux-persist';
import store from './src/store/store';
import { registerScreens } from './src/screens/screens';
import { setInitialLayout } from './src/NavigationController';


/**
 * Wait till our store is persisted
 * @param {store} storeToPersist - The redux store to persist
 * @returns {Promise} - Promise that resolves when the store is rehydrated
 */
const persistStore = storeToPersist => new Promise((resolve) => {
  persistStoreRaw(storeToPersist, undefined, () => {
    resolve();
  });
});

/**
 * We register screens
 *  then we wait for
 *    - Store to be rehydrated
 *    - Icons to be loaded.
 * and then we finally initialize
 * layout accordingly.
 */
async function bootstrap() {
  registerScreens(store);

  // TODO: wait for Vector Icons
  await Promise.all([persistStore(store)]);

  setInitialLayout();
}

/**
 * The initial listener of our app,
 * this will get triggered on app start or when
 * the Android activity is recreated.
 * (For example by pressing back button on the
 * root screen)
 */
Navigation.events().registerAppLaunchedListener(() => {
  bootstrap();
});

