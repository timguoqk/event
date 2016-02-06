var $ = require('cheerio');
var config = require('./config');
var Knwl = require("./knwl.js");
var knwlInstance = new Knwl('english');

// https://www.npmjs.com/package/cheerio
// https://github.com/loadfive/Knwl.js/blob/master/README.md

// var AYLIENTextAPI = require('aylien_textapi');
// var textapi = new AYLIENTextAPI({
//   application_id: config.aylien.application_id,
//   application_key: config.aylien.application_key
// });
// textapi.sentiment({
//   'text': 'John is a very good football player!'
// }, function(error, response) {
//   if (error === null) {
//     console.log(response);
//   }
// });
