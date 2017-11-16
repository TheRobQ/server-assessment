const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public'))
app.get('/api', function(req, res, next){
  res.send('Whoo')
})

app.use(function(req, res, next){
  res.status(404)
})

app.listen(port, function(){
  console.log(`listening on port number ${port}`);
})
