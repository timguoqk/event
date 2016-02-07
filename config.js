module.exports = {
  google: {
    clientID: '1038161259891-qvlcuf5d4l88dcf5qi0i2a7gl23upfkj.apps.googleusercontent.com',
    clientSecret: 'qn-oDhc44WYphIXZ85O2p5Om',
    redirectURL: 'http://localhost:3000/auth/callback',//'http://eventbox.timguoqk.me/auth/callback',
    scope: ['https://mail.google.com/', 'https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/plus.login'],
    gmailQ: 'from: Morning_Mail@brown.edu'
  },
  aylien: {
  	application_id: 'b447c021',
  	application_key: '1615c27afdbd453479e0406476036590'
  }
};
