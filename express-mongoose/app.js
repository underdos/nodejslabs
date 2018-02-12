const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://mongodb:admin@172.17.0.2:27017/admin');

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


app.get('/saveCollection', function(req, res){
  var response = {
    status: 10,
    message: 'Gagal'
  }

  kusnadi.save(function(err){  
    if (!err) {
      response.status = 0
      response.message = 'Sukses'
    }
  })

  res.send(response);
})

app.listen(7071, () => console.log('Example app listening on port 7071!'))