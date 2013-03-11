var semver = require('semver')

exports.key = 'Version'

// Wrap all the comparison functions in semver
;['satisfies','gt','gte','lt','lte','eq','neq'].forEach(function (fn) {
  exports[fn] = function (version) {
    return function (req, res, next) {
      var clientVersion = req.header(exports.key)
        , valid = semver[fn](clientVersion, version)

      // Invalid versions should pass an error
      if ( ! valid) {
        return next(new Error('Client must be at least version ' + version))
      }

      next()
    }
  }
})