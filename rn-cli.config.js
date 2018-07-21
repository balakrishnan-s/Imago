/* eslint-disable */

const config = {
  getBlackListRE() {
    // Do not include  /scripts folder in packager
    return blacklist([
      /scripts\/.*/,
    ]);
  },
};

module.exports = config;
