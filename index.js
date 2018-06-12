import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    component: {
      name: 'eventfinder.WelcomeScreen',
    },
  });
});
