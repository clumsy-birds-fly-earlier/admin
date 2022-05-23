const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackBar = require("webpackbar");
const path = require('path');

function resolve (dir) {
    return path.join(__dirname,  dir)
}

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        publicPath: './',
        filename: 'static/js/app.[hash:8].js?v=' + new Date().getTime()
    },
    devtool: 'cheap-module-souce-map',
    plugins: [
        new WebpackBar(),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': { 
                NODE_ENV: '"production"',
                REACT_APP_API: '"test"'
            } 
        }),
       
        new HtmlWebpackPlugin({
          filename: 'index.html',
          manifest: '../public/manifest.json',
          favicon: 'public/favicon.ico',
          template: resolve('../public/index.html'),
          inject: true
        }),
        new CopyWebpackPlugin([
            {
              from: resolve('../public'),
              to: resolve('../dist'),
              ignore: ['.*']
            }
        ]),
        new OptimizeCSSAssetsPlugin(),
      
        // copy custom static assets
  
    ],
   
})

// //console.log('devWebpackConfig', devWebpackConfig)
module.exports = devWebpackConfig