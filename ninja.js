class Ninja {	
	constructor(config) {
		console.log(config);
		this.fs = require('fs');
		this.url = require('url');
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
		this.mime = {
			"htm": "text/html",
			"html": "text/html",
			"css": "text/css",
			"js": "application/javascript",
			"json": "application/json",
			"xml": "application/xml",
			"jpg": "image/jpeg",
			"jpeg": "image/jpeg",
			"png": "image/png",
			"gif": "image/gif",
			"ico": 'image/x-icon',
			"svg": "image/svg+xml",
			"webp": "image/webp",
			"mp3": "audio/mpeg",
			"wav": "audio/wav",
			"mp4": "video/mp4",
			"mov": "video/quicktime",
			"avi": "video/x-msvideo",
			"pdf": "application/pdf",
			"zip": "application/zip",
			"rar": "application/x-rar-compressed",
			"tar": "application/x-tar",
			"gz": "application/gzip",
			"doc": "application/msword",
			"docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			"xls": "application/vnd.ms-excel",
			"xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"ppt": "application/vnd.ms-powerpoint",
			"pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
		};
	}

	startHTTP(){
		console.log('Ninja HTTP Server Start');
		this.httpServer.createServer(async (req,res)=>{
			if(req.url=='/')req.url='/index.html';
			var q = this.url.parse(req.url, true);
			var file = q.pathname.substr(1);
			var extension = file.split('.');
			extension = extension[1];
			
			this.fs.access("./http/"+file, err => {
				if(err) {
					res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
					res.write('<h1>ERROR 404</h1>');
					res.end();
				} else {
					this.fs.readFile("./http/"+file, (err, data) => {
						if (err) throw err;
						res.writeHead(200, {'Content-Type': this.mime[extension]});
						res.write(data);
						res.end();					
					});
				}
			});
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