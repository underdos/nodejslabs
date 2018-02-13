const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const db = require('./models')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/users', function(req, res){
  let response = {
    status: 10,
    message: 'Gagal'
  }
  
  let user = new db.user(req.body)

  user.save(function(err){  
    if (!err) {
      response.status = 10
      response.message = 'Sukses'
      res.send(response)
    } else {
      response.message = response.message+", "+err.errmsg
      res.send(response);
    }
  })

})

app.listen(7071, () => console.log('Example app listening on port 7071!'))