console.log('testing')
var express = require('express')
var app = express()
console.log('testing')
app.get('/', function(req, res) {
	res.send('Hello World')
})

app.listen(3000, function() {
  console.log('app is listening on port 3000')
  console.log('everything is fine!')
})
