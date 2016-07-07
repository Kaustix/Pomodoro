const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: __dirname,
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./js/App.jsx'
	],
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react']
			},
			{
				test: /\.less$/,
				loader: "style!css!less"
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			},
			{
				test: /\.(woff|woff2)$/,
				loader: "url?prefix=font/&limit=5000"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	}
};