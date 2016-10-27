var express = require('express');
var router = express.Router();
var Client = require('./model');

router.get('/', function(req, resp) {
	
	Client.find({}, function(err, data) {

		if(err) {
			resp.sendStatus(500);  //Internal error
		} else {
			resp.json(data);
		}
	});
});

router.get('/:id', function(req, resp) {

	var query = {
		_id: req.params.id
	};

	Client.findOne(query, function(err, data) {
		if(err || data === null) {
			resp.sendStatus(404); //Page not found
		} else {
			resp.json(data);
		}
	});
});

router.post('/', function(req, resp) {

	var client = new Client(req.body);
	
	client.save(function(err, data) {
		if(err) {
			resp.status(400).json(err); //Bad request - Error validating the JSON
		} else {
			resp.status(201).json(data); //Created succesfully
		}
	});
});

router.put('/:id', function(req, resp) {

	var query = {
		_id: req.params.id
	};

	var mod = req.body;

	delete mod._id;  //Exclui a chave primaria, para que ela não seja alterada tb no update

	Client.update(query, mod, function(err, data) {
		if(err) {
			resp.status(400).json(err);
		} else {
			resp.json(data);
		}
	});
});

router.delete('/:id', function(req, resp) {

	var query = {
		_id: req.params.id
	};

	Client.remove(query, function(err, data) {
		if(err) {
			resp.sendStatus(400).json(err); //Bad request
		} else {
			resp.json(data);
		}
	});
});

module.exports = router;