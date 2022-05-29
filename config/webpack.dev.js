const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.js");
const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir);
}

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  target: 'web',
  devServer: {
    hot: true,
    // port: 3000,
    open: true,
    proxy: {

    },
    quiet: false,
    // historyApiFallback: {
    //   disableDotRule: true,
    // }
  },
  // devServer: {
  //   hot: true
  // },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    // new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        REACT_APP_API: '"dev"',
      },
    }),

  ],
});

// //console.log('devWebpackConfig', devWebpackConfig)
module.exports = devWebpackConfig;
