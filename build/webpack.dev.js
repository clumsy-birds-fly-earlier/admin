const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const WebpackBar = require("webpackbar");
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
 
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "../dist"),
    inline: true,
    port: 3000,
    open: true,
    proxy: {
        "/api": {
          "target": "https://test-ebs.utrailer.cn/", 
        //   "pathRewrite": {
        //     "^/api": ""
        //   },
          secure: true,  // 如果是https接口，需要配置这个参数
          changeOrigin: true
        }
    },
    quiet: true,
    // host:'0.0.0.0',
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true,
    }
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshPlugin(),
    new WebpackBar(),
    // new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        REACT_APP_API: '"dev"',
      },
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      manifest: resolve('../public/manifest.json'),
      favicon: resolve('../public/favicon.ico'),
      template: resolve("../public/index.html"),
      inject: true,
    }),

    new CopyWebpackPlugin([
      {
        from: resolve("../public"),
        to: resolve("../dist"),
        ignore: [".*"],
      },
    ])
  ],
});

// //console.log('devWebpackConfig', devWebpackConfig)
module.exports = devWebpackConfig;
