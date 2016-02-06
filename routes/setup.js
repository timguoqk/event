var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.session.tokens) {
    res.redirect('../auth');
  }
  res.render('setup', {session: res.session});
});

module.exports = router;
