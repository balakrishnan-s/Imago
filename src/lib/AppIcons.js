import Icon from 'react-native-vector-icons/Feather';

const loadedIconsMap = {};

/**
 * Load icons into memory for RNN bottomTabs and leftButtons/rightButtons
 * @returns {Promise} Returns a promise that resolves when all the icons are loaded into memory.
 */
async function loadIcons() {
  loadedIconsMap.map = await Icon.getImageSource('map', 24, 'white');
  loadedIconsMap.heart = await Icon.getImageSource('heart', 24, 'white');
}

export { loadedIconsMap, loadIcons };
