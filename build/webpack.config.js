const path = require('path');
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const CopyWebpackPlugin = require('copy-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'

function resolve (dir) {
    return path.join(__dirname,  dir)
}

module.exports = {
    entry: [
        path.resolve(__dirname, '../src/index.js')
    ],
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename:  'static/js/app.js',
      publicPath: '/'
    },

    resolve: {
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {
            '@': resolve('../src'),
            'page': resolve('../src/Components/page'),
            'images': resolve('../src/images'),
            'utils': resolve('../src/lib'),
            'actions': resolve('../src/Actions'),
            // 'react-dom': '@hot-loader/react-dom'
        }
    },
   
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                include: [
                    resolve('../src')
                ],
                loader: 'happypack/loader?id=happyBabel',

            },
            // {
            //     test: /\.(css|less|scss|sass)$/,
            //     // loader: 'happypack/loader?id=happyStyle',
            //     use: [
            //       {
            //         loader: MiniCssExtractPlugin.loader,
            //         options: {
            //           hmr: devMode,
            //           reloadAll: devMode,
            //         },
            //       }
            //     ]
            // },
            {
                test: /\.(css|less|scss|sass)$/,
                loader: 'happypack/loader?id=css',
                // exclued:path.resolve(__dirname,'node_modules')
            },

           

            {
                test: /\.(png|jpeg|jpg|gif|svg)(\?.*)?$/,
                exclude: /node_modules/,
                include: [
                    resolve('../src')
                ],
                loader: 'url-loader'
            },
          
         
            {
                test: /\.(woff|eot|ttf)$/,
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'font/[name].[hash:4].[ext]'
                }
            }
        ]
    },
    performance: false,
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: devMode ? "static/css/[name].css" : "static/css/[name].[hash:8].css",
        //     chunkFilename: devMode ? "static/css/[id].css" : "static/css/[id].[hash:8].css"
        // }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyBabel',
            //如何处理  用法和loader 的配置一样
            loaders: [
            // 'react-hot',    
            {
              loader: 'babel-loader',
              options: {
                babelrc: true,
                cacheDirectory: true // 启用缓存
              }
            }],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: false,
        }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'css',
            //如何处理  用法和loader 的配置一样
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ],
            // loaders: [
            //     // {
            //     //     loader: MiniCssExtractPlugin.loader,
            //     //     options: {
            //     //         hmr: devMode,
            //     //         reloadAll: devMode,
            //     //     },
            //     // },
            //     {
            //         loader: 'css-loader',
            //         // options: {
            //         //   importLoaders: 2, // 之前有2个loaders
            //         //   // modules: true, // 启用cssModules
            //         //   sourceMap: true,
            //         // }
            //     },
            //     {
            //         loader: 'postcss-loader',
            //         // options: {
            //         //   sourceMap: true,//为true,在样式追溯时，显示的是编写时的样式，为false，则为编译后的样式
            //         // }
            //     },
            //     {
            //         loader: 'sass-loader',
            //         // options: {
            //         //   sourceMap: true,
            //         // }
            //     }
            // ],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: false,
        }),

    ]
  
  };