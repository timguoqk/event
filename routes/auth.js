var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var config = require('../config');

var db = require('../db');

var MLhelper = require('../MLhelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var oauth2Client = new OAuth2(config.google.clientID, config.google.clientSecret, config.google.redirectURL);
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: config.google.scope
  });
  res.redirect(url);
});

router.get('/callback', function(req, res, next) {
  if (!req.query.code) {
    res.render('error', {msg: 'No oauth2Client!'});
    return;
  }
  var oauth2Client = new OAuth2(config.google.clientID, config.google.clientSecret, config.google.redirectURL);
  oauth2Client.getToken(req.query.code, function(err, tokens) {
    req.session.tokens = tokens;
    google.plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
      if (err) {
        res.render('error', {msg: err});
        return;
      }
      // emails[0];
      res.redirect('../setup');
    });
  });
});

module.exports = router;
