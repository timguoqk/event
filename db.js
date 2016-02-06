var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/dev');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('mongodb running'); });

var userSchema = new Schema({
  id: Schema.Types.ObjectId,
  email: String,
  name: String,
  interests: [String],
  tokens: Buffer
});

db.User = mongoose.model('User', userSchema);

module.exports = db;