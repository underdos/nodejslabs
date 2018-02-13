const express = require('express')
const app = express()
const db = require('./models')




app.get('/saveCollection', function(req, res){
  let response = {
    status: 10,
    message: 'Gagal'
  }
  
  let user = new db.user({
    username: 'kusnadi',
    password: 'admin',
    name: 'Kusnadi',
    email: 'kus.underdos@gmail.com',
    phone: '085780621341',
    frinds: [],
    groups: []
  })

  user.save(function(err){  
    if (!err) {
      response.status = 10
      response.message = 'Sukses'
      res.send(response)
    } else {
      res.send(response);
    }
  })

})

app.listen(7071, () => console.log('Example app listening on port 7071!'))