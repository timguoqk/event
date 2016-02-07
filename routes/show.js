var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var calendar = google.calendar('v3');
var gmail = google.gmail('v1');

var dateFormat = require('dateformat');

var MLhelper = require('../MLhelper');
var config = require('../config');
var emailParser = require('../emailParser');

var _ = require('underscore');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/show/' + '2016-2-1');
  // var events = [];
  // var events = _.shuffle(MLhelper.events, 15);
  // var isFree = [];
  // for (var i = 0; i < events.length; i ++) {
  //   // events.push({
  //   //   month: 'Jan',
  //   //   day: '6',
  //   //   time: '3:00pm',
  //   //   title: 'what the fu',
  //   //   location: 'Providence',
  //   //   confidence: 0.2,
  //   //   content: 'What the f am i doing rn',
  //   // });
  //   events[i].url = toCalendarURL(events[i]);
  //   console.log(events[i].url);
  //   isFree.push((_.random(0, 10) == 0) ? 'notFree' : 'isFree');
  // }
  // res.render('show', {events: events, isFree: isFree});
});

router.get('/:day', function(req, res, next) {
  var day = req.params.day;
  day = day.replace(/-/g,'/');

  // Cache
  if (req.session.day == day)
    res.render('show', {events: req.session.events, isFree: req.session.isFree, day: req.params.day});

  var nextDay = new Date(day);
  nextDay.setDate(nextDay.getDate() + 1);
  var q = 'after:' + day + ' before:' + dateFormat(nextDay, 'yyyy/mm/dd') + ' from: Morning_Mail@brown.edu';
  console.log(q);
  if (!req.session.tokens) {
    res.redirect('../auth');
    return;
  }
  var oauth2Client = new OAuth2(config.google.clientID, config.google.clientSecret, config.google.redirectURL);
  oauth2Client.setCredentials(req.session.tokens);

  // retrieve user profile
  gmail.users.messages.list({
    userId: 'me',
    auth: oauth2Client,
    q: q,
    maxResults: 1
  }, function(err, list_res) {
    if (err) {
      res.render('custom_error', {msg: 'We only support Brown morning mails right now. Cannot find any morning emails!\n' + err});
      return;
    }
    if (!list_res.messages) {
      res.render('custom_error', {msg: 'Cannot find email on that date!\n' + err});
      return;
    }
    gmail.users.messages.get(
    {
      userId: 'me',
      auth: oauth2Client,
      id: list_res.messages[0].id
    }, function(err, get_res) {
      if (err) {
        res.render('custom_error', 'We cannot get your email...\n' + err);
        return;
      }
      var field = get_res.payload.parts[1].body.data;
      var events = emailParser.split(field);
      var isFree = [];
      for (var i = 0; i < events.length; i ++)
        isFree.push('isFree');

      emailParser.extend(events, function(extendedEvents) {
        var events = MLhelper.dataToEvents(extendedEvents);
        for (var i = 0; i < events.length; i ++) {
          if (_.random(0, 10) == 0)
            isFree[i] = 'notFree';
          // calendar.freebusy.query({});
        }

        for (var i = 0; i < events.length; i ++) {
          events[i].url = toCalendarURL(events[i]);
        }
        // MLhelper.create(req.session.email, extendedEvents, function(data) {
        //   // TODO: Assumed that calendar has finished
        req.session.day = day;
        req.session.events = events;
        req.session.isFree = isFree;
        res.render('show', {events: events, isFree: isFree, day: req.params.day});
        // });
      });
    });
  });
});

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