var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dev');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('mongodb running'); });

db.User = mongoose.model('User', require('./userSchema'));

module.exports = db;