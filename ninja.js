class Ninja {	
	constructor(config) {
		console.log(config);
		this.fs = require('fs');
		this.http = require(config.server.protocol);
		this.protocol = config.server.protocol;
		this.listen = config.server.port;
		this.domain = `${config.server.protocol}://${config.server.domain}`;
	}

	startHTTP(){
		console.log('Ninja HTTP Server Start');
		this.http.createServer(async (req,res)=>{
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
		}).listen(this.listen);
	}
	
}
module.exports = Ninja;