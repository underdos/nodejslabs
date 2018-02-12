const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://172.17.0.2:27017/chat');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

var Schema = mongoose.Schema

var userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  phone: String
})

var User = mongoose.model('User', userSchema)

var kusnadi = new User({
  username: 'kusnadi',
  password: 'admin',
  name: 'Kusnadi',
  email: 'kus.underdos@gmail.com',
  phone: '085780621341'
})

kusnadi.save(function(err){
  if (err) return handleError(err);

  console.log('data saved');
})
// app.get('/', function(req, res){
//   var kusnadi
// })