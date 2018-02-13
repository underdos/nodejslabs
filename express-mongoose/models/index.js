const mongoose = require('mongoose')
const db = {};
const Schema = mongoose.Schema

mongoose.connect('mongodb://chat:admin@172.17.0.2:27017/chat');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', function() {
  console.log("we're connected!")
});

var userSchema = new Schema({
  username: {type: String, unique: true},
  password: String,
  name: String,
  email: {type: String, unique: true},
  phone: String,
  friends: [String],
  groups: [String]
})

var messageSchema = new Schema({
  date: { type: Date, default: Date.now },
  body: String,
  belongsTo: [ { userId: String, status: Number } ]
})

db.user = mongoose.model('Users', userSchema)
db.messages = mongoose.model('Messages', messageSchema)

module.exports = db