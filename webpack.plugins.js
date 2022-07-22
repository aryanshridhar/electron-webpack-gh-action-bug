const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new webpack.DefinePlugin({
    STATIC_DIR: webpack.DefinePlugin.runtimeValue(() => {
      return JSON.stringify(path.join(__dirname, './static'))
    }, true),
  }),
]
