const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://172.17.0.2:27017/chat');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});
