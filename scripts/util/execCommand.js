/* eslint-disable */
const { exec } = require('child_process');

function execCommand(cmd) {
  exec(
    cmd,
    (error, stdout, stderr) => {
      console.log(`${stdout}`);
      console.log(`${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    },
  );
}

module.exports = execCommand;
