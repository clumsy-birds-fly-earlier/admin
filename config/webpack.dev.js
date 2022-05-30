const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.js");
const path = require("path");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { mockMiddleware } = require("../tools/middleware");
const fs = require('fs')
function resolve(dir) {
	return path.join(__dirname, dir);
}

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: "development",
	devtool: "cheap-module-source-map",
	target: "web",
	devServer: {
		hot: true,
		// port: 3000,
		open: false,
		proxy: {},
		quiet: false,
		// historyApiFallback: {
		//   disableDotRule: true,
		// }

    // webpack-dev-server4.x
    // onBeforeSetupMiddleware (devServer) {
    //   const mockFile = path.join(__dirname, '../tools/mock.js')
    //   if (fs.existsSync(mockFile)) {
    //     devServer.app.use(mockMiddleware(mockFile))
    //   }
    // }
    // webapck-dev-server3.x
    before (app) {
      const mockFile = path.join(__dirname, '../tools/mock.js')
      if (fs.existsSync(mockFile)) {
        app.use(mockMiddleware(mockFile))
      }
    }
	},
	plugins: [
		// new ReactRefreshWebpackPlugin(),
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
