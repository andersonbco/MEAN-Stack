var express = require('express');
var app = express();
var db  = require('./config/db');
var bodyParser = require('body-parser');
var cors = require('cors');

app.disable('x-powered-by');

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var api = {
	clients: require('./modules/clients/routes')
};

app.use('/api/v1/clients', api.clients);

//Hello API
app.get('/api', function(req, resp) {
	resp.send('Hello World API!');
});
module.exports = app;