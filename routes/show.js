var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var calendar = google.calendar('v3');

var MLhelper = require('../MLhelper');

var _ = require('underscore');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //var events = [];
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
    //isFree.push((_.random(0, 10) == 0) ? 'notFree' : 'isFree');
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
  // if (event.dates === undefined) {
  //    date = '20160107T130000Z/20160107T140000Z'
  // } else {
  //    date = event.dates;
  // }

  var date;
  var month = '01';
  var day = '01';

  switch(event.month) {
    case 'Jan':
      month = '01';
      break;
    case 'Feb':
      month = '02';
      break;
    case 'Mar':
      month = '03';
      break;
    case 'Apr':
      month = '04';
      break;
    case 'May':
      month = '05';
      break;
    case 'Jun':
      month = '06';
      break;
    case 'Jul':
      month = '07';
      break;
    case 'Aug':
      month = '08';
      break;
    case 'Sep':
      month = '09';
      break;
    case 'Oct':
      month = '10';
      break;
    case 'Nov':
      month = '11';
      break;
    case 'Dec':
      month = '12';
      break;
    default:
      month = '01';
      break;
  }

  if (event.day < 10 && event.day != '') {
    day = '0' + event.day;
  } else if (event.day > 10) {
    day = event.day;
  } else {
    day = '01';
  }

  // if (event.time.length == 0) {
  //   event.time = '8:00AM'
  // }
  
  //var minute = event.time.split(":")[1].slice(2);

  // date = new Date('\'' + event.month + event.day + ', 2016\'' + event.time);

  // var hour = (event.time.slice(-2)) == 'PM' ? parseInt(event.time.split(":")[0]) : parseInt(event.time.split(":")[0]);

  //date = '2016' + month + day + 'T' + event.hour + 'Z' + '/' + '2016' + month + day + 'T' + 'Z';

  // var month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  // var day = ((date.getDate()) < 10) ? '0' + (date.getDate()) : (date.getDate() + 1);

  //var dateString = date.getFullYear() + month + date.getDate() 
  //+ 'T' + hour + 'Z/' + date.getFullYear() + month + date.getDate() + 'T' + 'Z';

  var dateString = month + day;

  var url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' 
  + event.title
  + '&dates=' + '2016' + dateString + 'T130000Z/' + '2016' + dateString + 'T140000Z'
  + '&details=' + event.content
  + '&location=' + event.location;

  return url;
}