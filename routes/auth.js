var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var config = require('./config');

var htmlToText = require('html-to-text');
var mimelib = require('mimelib');

var MLhelper = require('../MLhelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.session.oauth2Client = new OAuth2(config.google.clientID, config.google.clientSecret, config.google.redirectURL);
  var url = req.session.oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: config.google.scope
  });
  res.redirect(url);
});

router.get('/callback', function(req, res, next) {
  if (!req.session.oauth2Client) {
    res.render('error', {msg: 'No oauth2Client!'});
    return;
  }
  // TODO: inspect to find ways to get code
  var code;
  req.session.oauth2Client.getToken(code, function(err, tokens) {
    req.session.oauth2Client.setCredentials(tokens);
    res.redirect('../setup');
  });
});

module.exports = router;
