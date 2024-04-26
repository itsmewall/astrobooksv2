const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      'react-native$': 'react-native-web',
    },
  },
};
