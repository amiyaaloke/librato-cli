var config = require('./librato-cli-config');
var Client = require('node-rest-client').Client;

var optionsAuth = { base: config.baseUrl, user: config.libratoToken, password: config.libratoApiKey };
var client = new Client(optionsAuth);

module.exports = client;
