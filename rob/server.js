const express = require('express')
const app = express(
)
const port = 8000

const listen = () => console.log('woo')
app.use(express.static('public'))

app.get('/api', function(req, res, next) {
  res.send('woo!')
})
app.listen(port, listen)
