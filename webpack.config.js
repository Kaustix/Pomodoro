const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: __dirname,
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
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
				test: /\.(png|gpd|ico|gif)?$/,
				loader: 'file-loader?name=img/[name].[ext]'
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