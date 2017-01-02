var webpack = require('webpack'),
    path = require('path'),
    config = {},
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'app/dist'),
      APP_DIR = path.resolve(__dirname, 'app/src');

config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin('styles/main.css', {
            allChunks: true
        })
    ]
};

module.exports = config;      