const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");
const ESLintPlugin = require('eslint-webpack-plugin');
function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	entry: [path.resolve(__dirname, "../src/index.tsx")],
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "static/js/app.js",
		publicPath: "/",
	},

	resolve: {
		extensions: [".js", ".jsx", "ts", ".tsx"],
		alias: {
			"@": resolve("../src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(css|less|scss|sass)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 2, // 表示 css-loader又找到需要处理的css 回向前找一个loader
						},
					},
					"postcss-loader",
					"sass-loader",
				],
				// exclued:path.resolve(__dirname,'node_modules')
			},

			// url-loader 内部其实可以调用file-loader
			// {
			//     test: /\.(png|svg|gif|jpe?g)$/,
			//     use: [
			//         {
			//             loader: 'url-loader',
			//             options: {
			//                 esModule: false, // 不转为 esModule
			//                 name: 'img/[name].[hash:6].[ext]',
			//                 limit: 25 * 1024
			//             }
			//         }
			//     ],
			// },

            // webpack5 内置asset模块
            {
                test: /\.(png|svg|gif|jpe?g)$/,
                type: 'asset',
                generator: {
                    filename: "img/[name].[hash:4][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024
                    }
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:3][ext]'
                }
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
			fix:true,
			extensions: [".js", ".jsx", "ts", ".tsx"]
		}),
        new WebpackBar(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            favicon: 'public/favicon.ico',
            template: resolve("../public/index.html"),
            inject: true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: ['**/index.html']
                    }
                }
            ]
        })
    ]

};
