var Ninja = require('./ninja.js');

ninja=new Ninja({
	'server' : {
		'protocol' : 'http',
		'domain' : 'localhost',
		'port' : 80,
		'origin' : 'localhost'
	}
});

ninja.startHTTP();