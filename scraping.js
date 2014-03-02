// filename : scraping.js

var cheerio = require('cheerio');
var request = require('request');

var url = 'http://blog.saltfactory.net';
request(url, function(error, response, html){
	if(error) { throw error };

	console.log(html);
});

