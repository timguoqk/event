var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var calendar = google.calendar('v3');

var _ = require('underscore');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var events = [];
  for (var i = 0; i < 20; i ++) {
    events.push({
      month: 'Jan',
      day: '6',
      time: '3:00pm',
      title: 'what the fu',
      location: 'Providence',
      confidence: 0.2,
      content: 'What the f am i doing rn'
    });
  }
  res.render('show', {events: events});
});

// router.get('/', function(req, res, next) {
//   if (!session.tokens) {
//     req.redirect('../auth');
//     return;
//   }
//   var oauth2Client = new OAuth2(config.google.clientID, config.google.clientSecret, config.google.redirectURL);
//   oauth2Client.setCredentials(token);

//   // retrieve user profile
//   gmail.users.messages.list({
//     userId: 'me',
//     auth: oauth2Client,
//     q: config.google.gmailQ,
//     maxResults: 1
//   }, function(err, list_res) {
//     if (err) {
//       res.render('custom_error', 'We only support Brown morning mails right now. Cannot find any morning emails!\n' + err);
//       return;
//     }
//     gmail.users.messages.get(
//     {
//       userId: 'me',
//       auth: oauth2Client,
//       id: list_res.messages[0].id
//     }, function(err, get_res) {
//       if (err) {
//         res.render('custom_error', 'We cannot get your email...\n' + err);
//         return;
//       }
//       var field = get_res.payload.parts[1].body.data;
//       var events = emailParser.split(field);
//       var isFree = [];
//       for (var i = 0; i < events.length; i ++)
//         isFree.push(true);

//       emailParser.extend(events, function(extendedEvents) {
//         MLhelper.create(req.session.email, extendedEvents, function(data) {
//           // TODO: Assumed that calendar has finished
//           req.render('show', {data: data, isFree: isFree});
//         });
//       });

//       for (var i = 0; i < events.length; i ++) {
//         // calendar.freebusy.query({});
//       }
      
//     });
//   });
// });

module.exports = router;

function toCalendarURL(event) {
  var url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' 
  + event.name
  + '&dates=' + event.dates
  + '&details=' + event.details
  + '&location=' + event.location;

  return url;
}