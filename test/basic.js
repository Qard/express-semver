var assert = require('assert')
  , ver = require('..')

describe('Should succeed', function () {
  var req;

  beforeEach(function () {
    req = {
      header: function () {
        return '1.0.0'
      }
    }
  })

  function noErr (err) {
    assert(typeof err === 'undefined')
  }

  it('should satisfy', function () {
    ver.satisfies('> 0.9.9 < 1.0.1')(req, {}, noErr)
  })

  it('should be gt', function () {
    ver.gt('0.9.9')(req, {}, noErr)
  })
  it('should be lt', function () {
    ver.lt('1.0.1')(req, {}, noErr)
  })

  it('should be gte', function () {
    ver.gte('1.0.0')(req, {}, noErr)
  })
  it('should be lte', function () {
    ver.lte('1.0.0')(req, {}, noErr)
  })

  it('should be eq', function () {
    ver.eq('1.0.0')(req, {}, noErr)
  })
  it('should be neq', function () {
    ver.neq('1.0.1')(req, {}, noErr)
  })

  it('should support x wildcard', function () {
    ver.satisfies('1.x.x')(req, {}, noErr)
  })
})

describe('Should fail', function () {
  var req;

  beforeEach(function () {
    req = {
      header: function () {
        return '1.0.0'
      }
    }
  })

  function noErr (err) {
    assert(typeof err !== 'undefined')
  }

  it('should satisfy', function () {
    ver.satisfies('> 1.0.0 < 1.0.0')(req, {}, noErr)
  })

  it('should be gt', function () {
    ver.gt('1.0.0')(req, {}, noErr)
  })
  it('should be lt', function () {
    ver.lt('1.0.0')(req, {}, noErr)
  })

  it('should be gte', function () {
    ver.gte('1.0.1')(req, {}, noErr)
  })
  it('should be lte', function () {
    ver.lte('0.9.9')(req, {}, noErr)
  })

  it('should be eq', function () {
    ver.eq('1.0.1')(req, {}, noErr)
  })
  it('should be neq', function () {
    ver.neq('1.0.0')(req, {}, noErr)
  })
})