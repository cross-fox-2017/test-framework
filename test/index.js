const should = require('chai').should()
const math = require('../index')

describe('Add a + b', function () {
  it('should return an error', function () {
    math.add(function (a) {return a}).should.equal('error')
  })
  it('should return a + b', function () {
    math.add(2, 3).should.equal(5)
  })
  it('should return a Number', function () {
    math.add(2, 3).should.be.a('Number')
  })
})

describe('Substract a - b', function () {
  it('should return an error', function () {
    math.substract({id: 123,name: 'Ninja'}).should.equal('error')
  })
  it('should return a - b', function () {
    math.substract(10, 5).should.equal(5)
  })
  it('should return a Number', function () {
    math.substract(10, 5).should.be.a('Number')
  })
})

describe('multiply a * b', function () {
  it('should return an error', function () {
    math.multiply([1, 2, 3]).should.equal('error')
  })
  it('should return a * b', function () {
    math.multiply(5, 5).should.equal(25)
  })
  it('should return a Number', function () {
    math.multiply(5, 5).should.be.a('Number')
  })
})

describe('divide a / b', function () {
  it('should return an error', function () {
    math.divide('abc').should.equal('error')
  })
  it('should return a / b', function () {
    math.divide(10, 5).should.equal(2)
  })
  it('should return a Number', function () {
    math.divide(10, 5).should.be.a('number')
  })
})

describe('exponent Math.pow()', function () {
  it('should return an error', function () {
    math.exponent('abc').should.equal('error')
  })
  it('should return Math.pow(a,b)', function () {
    math.exponent(4, 2).should.equal(16)
  })
  it('should return a Number', function () {
    math.exponent(4, 2).should.be.a('number')
  })
})

describe('root Math.sqrt()', function () {
  it('should return an error', function () {
    math.root('abc').should.equal('error')
  })
  it('should return Math.sqrt(a) result', function () {
    math.root(16).should.equal(4)
  })
  it('should return a Number', function () {
    math.root(16).should.be.a('number')
  })
})
