/* eslint-disable */
const execCommand = require('./util/execCommand');

const os = require('os');
const platform = os.platform();

if (platform.indexOf('win') !== -1) {
  execCommand('rmdir /s /q node_modules');
  // not sure what other windows clean commands are
} else {
  execCommand('rm -rf node_modules');
  execCommand('rm -rf $TMPDIR/react*');
  execCommand('rm -rf $TMPDIR/metro-*');
  execCommand('rm -rf ios/build');
  execCommand('rm -rf android/build');
  execCommand('watchman watch-del-all');
  execCommand('yarn cache clean');
}