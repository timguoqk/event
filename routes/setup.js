var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // if (!req.session.tokens) {
  //   res.redirect('../auth');
  // }
  req.session.name = 'Chris';
  res.render('setup', {session: req.session});
});

module.exports = router;
