const path = require('path');
const express = require('express');

const app = express();
app.use('/public', express.static(path.join(__dirname, './public')));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './index.html'))
});

const port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log(`App running on port ${port}`);
});