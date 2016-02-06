var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var emailParser = require('./emailParser');
var config = require('./config');
var gmail = google.gmail('v1');
var fs = require('fs');
var jsonfile = require('jsonfile');
var util = require('util');
var Knwl = require("knwl.js");

// city_name=city_name.replace(/ /gi,'_');

var oauth2Client = new OAuth2(config.google.clientID, config.google.clientSecret, config.google.redirectURL);
var token = {
  access_token: 'ya29.gAK94MDD-MdOxgCGQ4s_Z4ZCN4BKJyZNPDzTjM457ULuNkpT0qpvTTN04s2Tuk98lNn_',
  token_type: 'Bearer',
  refresh_token: '1/uq2o2Q0Zd4m5HEKzqgBY8584kadOTe4QFLWlzM3xfjBIgOrJDtdun6zK6XiATCKT',
  expiry_date: 1454795819635
};
oauth2Client.setCredentials(token);

// var ans = [];

// var maxResults = 200, count = 0;

// gmail.users.messages.list({
//   userId: 'me',
//   auth: oauth2Client,
//   q: config.google.gmailQ,
//   maxResults: maxResults
// }, function(err, list_res) {
//   if (err) {
//     console.log('An error occured', err);
//     return;
//   }
//   for (var i = 0; i < list_res.messages.length; i ++) {
//     gmail.users.messages.get(
//     {
//       userId: 'me',
//       auth: oauth2Client,
//       id: list_res.messages[i].id
//     }, function(err, get_res) {
//       if (err) {
//         return;
//       }
//       var field = get_res.payload.parts[1].body.data;
//       var res = emailParser.split(field);
//       // console.log(res);
//       ans.push(res);
//       count ++;
//       if (count == maxResults)
//         format();
//       // res.redirect('finished');
//     });
//   }
// });

// function format() {
//   var outputStr = '';
//   for (var i = 0; i < ans.length; i ++) {
//     for (var j = 0; j < ans[i].length; j ++) {
//       outputStr += ans[i][j].title + '\n' + ans[i][j].content + '\n';
//     }
//   }
//   console.log(outputStr);
//   fs.writeFile("./test", outputStr, function(err) {
//     console.log(err);
//   });
//   jsonfile.writeFile('tmp/ans.json', ans, function (err) {
//     console.error(err)
//   });
// }

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: config.aylien.application_id,
  application_key: config.aylien.application_key
});

var ans = jsonfile.readFileSync('tmp/ans.json');
var expected = 2 * ans.length, count = 0;
var summary = [], entities = [];
for (var i = 0; i < ans.length; i ++) {
  summary.push({});
  entities.push({});
}
for (var i = 0; i < ans.length; i ++) {
  closure(i);
}

function closure(i) {
  var knwlInstance = new Knwl('english');
  knwlInstance.init(ans[i].content);
  if (knwlInstance.get('dates').length != 0)
    ans[i].dates = knwlInstance.get('dates')[0];
  if (knwlInstance.get('times').length != 0)
    ans[i].times = knwlInstance.get('times')[0];
  if (knwlInstance.get('places').length != 0)
    ans[i].places = knwlInstance.get('places')[0];
  textapi.summarize({
    'title': ans[i].title,
    'text': ans[i].content,
    'sentences_number': 1
  }, function(error, response) {
    console.log(count);
    if (error === null) {
      // console.log(response.sentences);
      summary[i] = response.sentences[0];
      count += 1;
      if (count == expected) {
        format();
      }
    } else {
      count += 1;
      if (count == expected) {
        format();
      }
    }
  });
  textapi.entities({
    'text': ans[i].content
  }, function(error, response) {
    console.log(count);
    if (error === null) {
      // console.log(response.entities);
      entities[i] = response.entities;
      count += 1;
      if (count == expected) {
        format();
      }
    } else {
      count += 1;
      if (count == expected) {
        format();
      }
    }
  });
}

function combine(i) {
  ans[i].summary = summary[i];
  ans[i].entities = entities[i];
}

function format() {
  for (var i = 0; i < ans.length; i ++)
    combine(i);
  console.log(ans[0]);
  console.log(ans[1]);
  jsonfile.writeFile('tmp/all.json', ans, function (err) {
  });
}
