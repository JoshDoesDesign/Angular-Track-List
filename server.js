var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('index');
});

var port = Number(process.env.PORT || 3000);

server.listen(port);