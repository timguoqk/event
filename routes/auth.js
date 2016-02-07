var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var config = require('../config');
var plus = google.plus('v1');

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
    res.render('custom_error', {msg: 'No oauth2Client!'});
    return;
  }
  var oauth2Client = new OAuth2(config.google.clientID, config.google.clientSecret, config.google.redirectURL);
  oauth2Client.getToken(req.query.code, function(err, tokens) {
    req.session.tokens = tokens;
    oauth2Client.setCredentials(tokens);
    google.oauth2('v2').userinfo.get({ userId: 'me', auth: oauth2Client }, function(err, userinfo) {
      if (err) {
        res.render('custom_error', {msg: err});
        return;
      }
      console.log(userinfo);
      req.session.name = userinfo.name;
      req.session.photo = userinfo.picture;
      res.redirect('../setup');
    });
  });
});

router.get('/destroy', function(req, res, next) {
  req.session.destroy();
  res.redirect('../');
});

module.exports = router;
