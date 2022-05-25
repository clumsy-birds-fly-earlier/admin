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

  devServer: {
    hot: true,
    // contentBase: path.resolve(__dirname, "../public"),
    port: 3000,
    open: true,
    proxy: {

    },
    quiet: false,
    historyApiFallback: {
      disableDotRule: true,
    }
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        REACT_APP_API: '"dev"',
      },
    }),
    new ReactRefreshWebpackPlugin()
  ],
});

// //console.log('devWebpackConfig', devWebpackConfig)
module.exports = devWebpackConfig;
