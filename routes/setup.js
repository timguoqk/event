var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.)
  res.send('respond with a resource');
});

module.exports = router;
