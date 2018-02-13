const express = require('express')
const app = express()
const db = require('models')

var kusnadi = new db.User({
  username: 'kusnadi',
  password: 'admin',
  name: 'Kusnadi',
  email: 'kus.underdos@gmail.com',
  phone: '085780621341'
})


app.get('/saveCollection', function(req, res){
  let response = {
    status: 10,
    message: 'Gagal'
  }

  kusnadi.save(function(err){  
    if (err) {
      response.status = 10
      response.message = 'Sukses'
    }
  })

  res.send(response);
})

app.listen(7071, () => console.log('Example app listening on port 7071!'))