var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'EventBox'});
});

// router.get('/setup', function(req, res, next) {
//   res.render('setup', {title: 'EventBox'});
// });

module.exports = router;
