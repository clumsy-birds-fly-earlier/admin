const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.js')




const path = require('path');


function resolve(dir) {
    return path.join(__dirname, dir)
}

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false,
    output: {
        publicPath: './',
        filename: 'static/js/[name]_[contenthash:8].js'
    },
    plugins: [


        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                REACT_APP_API: '"product"'
            }
        })
    ],

})

// //console.log('devWebpackConfig', devWebpackConfig)
module.exports = devWebpackConfig