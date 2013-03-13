# Express-Semver
[![Build Status](https://travis-ci.org/Qard/express-semver.png)](https://travis-ci.org/Qard/express-semver)

This is just a simple middleware for semver-style API versioning with express. This uses isaacs [semver](http://github.com/isaacs/node-semver) module, so all the same versioning string rules apply as npm itself.

## Install

    npm install express-semver

## Usage

    // Blanket version a whole server
    var basic = express()
    basic.use(ver.gte('0.0.0'))
    basic.get('/', function (req, res) {
      res.send('Hello, World')
    })
    server.use('/basic', basic)

    // Or version per-route
    var complex = express()
    complex.get('/', ver.gte('0.0.0'), function (req, res) {
      res.send('Hello, World')
    })
    server.use('/complex', complex)

## API

### ver.satisfies|gt|gte|lt|lte|eq|neq
Returns a middleware that restricts continuation with express if the specified "Version" header is not set. It can be used both with use() or in the flow of any route definition.

---

### Copyright (c) 2013 Stephen Belanger
#### Licensed under MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.