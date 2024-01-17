var Ninja = require('./ninja.js');

ninja=new Ninja({
	'server': {
		'http' : {
			'protocol' : 'http',
			'domain' : 'localhost',
			'port' : 80,
			'origin' : 'localhost'
		},
		'rest' : {
			'protocol' : 'http',
			'domain' : 'localhost',
			'port' : 3000,
			'origin' : 'localhost'
		},
	}
});

ninja.startHTTP();
ninja.startREST();