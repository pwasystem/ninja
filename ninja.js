class Ninja {	
	constructor(config) {
		console.log(config);
		this.fs = require('fs');
		//httpServer
		this.httpServer = require(config.server.http.protocol);
		this.httpProtocol = config.server.http.protocol;
		this.httpListen = config.server.http.port;
		this.httpDomain = `${config.server.http.protocol}://${config.server.http.domain}`;
		//restServer
		this.restServer = require(config.server.rest.protocol);
		this.restProtocol = config.server.rest.protocol;
		this.restListen = config.server.rest.port;
		this.restDomain = `${config.server.rest.protocol}://${config.server.rest.domain}`;
		this.restOrigem = `${config.server.http.protocol}://${config.server.http.domain}`;
	}

	startHTTP(){
		console.log('Ninja HTTP Server Start');
		this.httpServer.createServer(async (req,res)=>{
			if(req.url=='/')req.url='/index.html';
			if(req.url.indexOf('favicon.ico') > 0 || req.url.indexOf('index.html') > 0){
				let file = req.url.indexOf('index.html') > 0 ? './http/index.html' : './favicon.ico' ;
				let type = req.url.indexOf('index.html') > 0 ? 'text/html; charset=UTF-8' : 'image/x-icon' ;
				this.fs.readFile(file, (err, ico) => {
					if (err) throw err;
					res.writeHead(200, {'Content-Type': type});
					res.write(ico);
					res.end();					
				});
			} else {					
				res.writeHead(404, {
					'Content-Type': 'text/html; charset=UTF-8'
				});
				res.write('<h1>ERROR 404</h1>');
				res.end();
			}		
		}).listen(this.httpListen);
	}

	startREST(){
		console.log('Ninja REST Server Start');
		this.restServer.createServer(async (req,res)=>{
			res.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8'});
			res.write('[{"status":"ok"}]');
			res.end();		
		}).listen(this.restListen);
	}
	
}
module.exports = Ninja;