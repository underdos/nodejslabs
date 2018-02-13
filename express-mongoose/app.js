const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const db = require('./models')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/users', function(req, res){
  let response = {
    status: 10,
    message: 'Gagal',
    data: {}
  }

  db.user.create(req.body, function(err, result){  
    if (!err) {
      response.status = 0
      response.message = 'Sukses'
      response.data = result
      res.send(response)
    } else {
      response.message = response.message+", "+err.errmsg
      res.send(response);
    }
  })
})

app.get('/users', function(req, res){
  
})

app.listen(7071, () => console.log('Example app listening on port 7071!'))