import Icon from 'react-native-vector-icons/Feather';

const loadedIconsMap = {};

async function loadIcons() {
  loadedIconsMap.map = await Icon.getImageSource('map', 24, 'white');
  loadedIconsMap.heart = await Icon.getImageSource('heart', 24, 'white');
}

export { loadedIconsMap, loadIcons };
