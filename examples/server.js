var express = require('express')
  , ver = require('..')
  , server = express()

function hello (req, res) {
  res.send('Hello, World')
}

// Blanket version a whole server
var basic = express()
basic.use(ver.gte('0.0.0'))
basic.get('/', hello)
server.use('/basic', basic)


// Or version per-route
var complex = express()
complex.get('/', ver.gte('0.0.0'), hello)
complex.get('/', hello)
server.use('/basic', complex)


server.listen(3000)