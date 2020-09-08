var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('<h1> hello world </h1>')
})
app.listen(3000, ()=>{
  console.log(`app is running in port 3000`)
});