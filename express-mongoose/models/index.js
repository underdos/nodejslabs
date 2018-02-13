const mongoose = require('mongoose')
const db = {};
const Schema = mongoose.Schema

mongoose.connect('mongodb://chat:admin@172.17.0.2:27017/chat');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', function() {
  console.log("we're connected!")
});

var userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  phone: String
})

var User = mongoose.model('Test', userSchema)

db.user = User

module.exports = db