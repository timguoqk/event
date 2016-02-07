var express = require('express');
var router = express.Router();

var MLhelper = require('../MLhelper');
var _ = require('underscore');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // if (!req.session.tokens) {
  //   res.redirect('../auth');
  // }
  res.render('setup', {
  	session: req.session,
  	events: _.shuffle(MLhelper.events, 15)
  });
});

module.exports = router;
