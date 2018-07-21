/* eslint-disable */
const os = require('os');

const platform = os.platform();

const { exec } = require('child_process');

if (platform.indexOf('win') !== -1) {
  exec('rmdir /s /q node_modules',
    (error, stdout, stderr) => {
      console.log(`${stdout}`);
      console.log(`${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });
    console.log('Done.')
}
