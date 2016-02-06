var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.session.oauth2Client) {
    res.redirect('../auth');
  }
  // retrieve user profile
  google.users.messages.list({ userId: 'me', auth: oauth2Client, q: config.google.gmailQ }, function(err, list_res) {
    if (err) {
      console.log('An error occured', err);
      return;
    }
    var emailID = list_res.messages[0].id;
    console.log(emailID);
    // google.users.messages.get({ userId: 'me', auth: oauth2Client, id: emailID, format: 'raw'}, function(err, get_res) {
    //   var mime = get_res.raw;
    //   var html = mimelib.decodeBase64(mime);
    //   var text = htmlToText.fromString(html, {wordwrap: false, ignoreHref: true, ignoreImage: true});
    //   MLhelper.predict();
    //   res.redirect('finished');
    // });
  });
  res.send('respond with a resource');
});

module.exports = router;
