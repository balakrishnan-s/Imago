import { Navigation } from 'react-native-navigation';

export const setInitialLayout = () => { //eslint-disable-line
  Navigation.setRoot({
    root: {
      component: {
        name: 'eventfinder.LandingPage',
      },
    },
  });
};

