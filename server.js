const path = require('path');
const express = require('express');

const app = express();
app.use('/public', express.static(path.join(__dirname, './public')));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './index.html'))
});

if (process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const config = require('./webpack.config.js');
	const compiler = webpack(config);

	app.use(webpackHotMiddleware(compiler));
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: { colors: true }
	}));
}

const port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log(`App running on port ${port}`);
});