import { Navigation } from 'react-native-navigation';
import { loadedIconsMap } from './lib/AppIcons';
import Colors from './styles/colors';


export const setInitialLayout = () => {
  const defaultOptions =
    {
      statusBar: {
        style: 'light',
      },
      layout: {
        backgroundColor: Colors.secondBlue,
        orientation: ['portrait', 'landscape'],
      },
      topBar: {
        buttonColor: 'white',
        background: {
          color: Colors.primaryBlue,
        },
      },
      bottomTabs: {
        elevation: 8, // BottomTabs elevation in dp
        titleDisplayMode: 'alwaysShow',
        backgroundColor: Colors.primaryBlue,
      },
    };

  Navigation.setDefaultOptions(defaultOptions);

  const favouritesTab = {
    stack: {
      children: [
        {
          component: {
            name: 'eventFinder.FavouriteScreen',
          },
        },
      ],
      options: {
        bottomTab: {
          text: 'Favourites',
          icon: loadedIconsMap.heart,
        },
      },
    },
  };

  const mapTab = {
    stack: {
      children: [
        {
          component: {
            name: 'eventFinder.MapScreen',
          },
        },
      ],
      options: {
        bottomTab: {
          text: 'Map',
          icon: loadedIconsMap.map,
        },
      },
    },
  };

  const bottomTabs = {
    children: [
      favouritesTab,
      mapTab,
    ],
    options: {},
  };

  Navigation.setRoot({
    root: {
      bottomTabs,
    },
  });
};

