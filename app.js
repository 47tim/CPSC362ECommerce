// var http = require( 'http');
// var fs = require('fs');

// var server = http.createServer(function (req, res){
// 	console.log('request was made: ' + req.url);
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	var myReadStream = fs.createReadStream(__dirname + '/pages/index.html', 'utf8');
// 	myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');

const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', {root: __dirname});
});

app.get('/signup', (req, res) => {
	res.sendFile('./pages/signup.html', {root: __dirname});
});

app.get('/login', (req, res) => {
	res.sendFile('./pages/login.html', {root: __dirname});
});

app.get('/locker', (req, res) => {
	res.sendFile('./pages/locker.html', {root: __dirname});
});

app.get('/settings', (req, res) => {
	res.sendFile('./pages/settings.html', {root: __dirname});
});

app.get('/recover', (req, res) => {
	res.sendFile('./pages/recover_account.html', {root: __dirname});
});

app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});