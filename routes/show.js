var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var calendar = google.calendar('v3');

var MLhelper = require('../MLhelper');

var _ = require('underscore');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var events = [];
  var events = _.shuffle(MLhelper.events, 15);
  var isFree = [];
  for (var i = 0; i < events.length; i ++) {
    // events.push({
    //   month: 'Jan',
    //   day: '6',
    //   time: '3:00pm',
    //   title: 'what the fu',
    //   location: 'Providence',
    //   confidence: 0.2,
    //   content: 'What the f am i doing rn',
    // });
    events[i].url = toCalendarURL(events[i]);
    isFree.push((_.random(0, 10) == 0) ? 'notFree' : 'isFree');
  }
  res.render('show', {events: events, isFree: isFree});
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
//         isFree.push('isFree');

//       emailParser.extend(events, function(extendedEvents) {
//         var events = MLhelper.dataToEvents(extendedEvents);
//         for (var i = 0; i < events.length; i ++) {
//           if (_.random(0, 10) == 0)
//             isFree[i] = 'notFree';
//           // calendar.freebusy.query({});
//         }
//         // MLhelper.create(req.session.email, extendedEvents, function(data) {
//         //   // TODO: Assumed that calendar has finished
//           req.render('show', {events: events, isFree: isFree});
//         // });
//       });
//     });
//   });
// });

module.exports = router;

function toCalendarURL(event) {
// <a href="http://www.google.com/calendar/event?
// action=TEMPLATE
// &text=[event-title]
// &dates=[start-custom format='Ymd\\THi00\\Z']/[end-custom format='Ymd\\THi00\\Z']
// &details=[description]
// &location=[location]
// &trp=false
// &sprop=
// &sprop=name:"
// target="_blank" rel="nofollow">Add to my calendar</a>
  var url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' 
  + event.title
  + '&dates=' + event.dates
  + '&details=' + event.content
  + '&location=' + event.location;

  return url;
}