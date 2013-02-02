var http = require('http');
var exec = require('child_process').exec,
	child;
var ic;

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Server ifconfig\n\n');
	
	child = exec('ifconfig', function(error, stdout, stderror){
		ic = stdout;
	});
	
	response.write(ic);
	response.end('\n\nEnd of server ifconfif\n\n');
}).listen(1337);