var cheerio = require('cheerio');
var config = require('./config');
var mimelib = require('mimelib');
var Knwl = require("knwl.js");
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: config.aylien.application_id,
  application_key: config.aylien.application_key
});

module.exports = {
  split: function(mime) {
    var results = [];
    var $ = cheerio.load(mimelib.decodeBase64(mime));
    var titles = $($('h3')[3]).next('table').find('tr td b');
    titles.each(function(i, elem){
      var descriptions = $(this).parent().parent().siblings();
      var content = '';
      for (var i = 0; i < descriptions.length - 1; i ++) {
        content += $(descriptions[i]).text();
      }
      results.push({title: $(this).text(), content: content});
    });
    return results;
  },
  extend: function(events, callback) {
    var count = 0, expected = 2 * events.length;
    var summary = [], entities = [];
    for (var i = 0; i < events.length; i ++) {
      summary.push({});
      entities.push({});
    }
    for (var i = 0; i < events.length; i ++)
      closure(i);

    function closure(i) {
      var knwlInstance = new Knwl('english');
      knwlInstance.init(events[i].content);
      if (knwlInstance.get('dates').length != 0)
        events[i].dates = knwlInstance.get('dates')[0];
      if (knwlInstance.get('times').length != 0)
        events[i].times = knwlInstance.get('times')[0];
      if (knwlInstance.get('places').length != 0)
        events[i].places = knwlInstance.get('places')[0];
      textapi.summarize({
        'title': events[i].title,
        'text': events[i].content,
        'sentences_number': 1
      }, function(error, response) {
        if (error === null) {
          summary[i] = response.sentences[0];
          count += 1;
          if (count == expected)
            format();
        } else {
          count += 1;
          if (count == expected)
            format();
        }
      });
      textapi.entities({
        'text': events[i].content
      }, function(error, response) {
        if (error === null) {
          entities[i] = response.entities;
          count += 1;
          if (count == expected)
            format();
        } else {
          count += 1;
          if (count == expected)
            format();
        }
      });
    }

    function combine(i) {
      events[i].summary = summary[i];
      events[i].entities = entities[i];
    }

    function format() {
      for (var i = 0; i < events.length; i ++)
        combine(i);
      callback(events);
    }

  }
}