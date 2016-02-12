var path = require('path');
var webpack = require('webpack');

// compile js assets into a single bundle file
var webpackConfig = {
	options: {
		debug: true,
		devtool: 'source-map',
		entry: [
			'./app/index'
		],
		output: {
			path: path.resolve(__dirname, '../.tmp/public/js'),
			filename: 'bundle.js'
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin()
		],
		module: {
			loaders: [
				{ test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
				{ test: /\.coffee$/, loader: 'coffee-loader', exclude: /node_modules/ },
				{ test: /\.cjsx$/, loaders: ['coffee', 'cjsx'], exclude: /node_modules/ },
			]
		},
		resolve: {
			root: [path.resolve('./app')],
			extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".coffee", ".cjsx"]
		}
	},

	// docs: https://webpack.github.io/docs/node.js-api.html#compiler
	watchOptions: {
		aggregateTimeout: 300
	}
};

module.exports = webpackConfig.options;
module.exports.webpack = webpackConfig;