const math = require('../index').math
const run = require('../index').run

const chai = require('chai')
chai.should()
const expect = chai.expect

// -----------------------------------------------------------------------------
// ADDITION

describe('Math.add(a, b)', function () {
  it('should return exactly the result of a + b', function () {
    math.add(0, 0).should.equal(0)
    math.add(0).should.equal('Error')
    math.add(-0, -0).should.equal(0)
    math.add(-1, -1).should.equal(-2)
    math.add(1 * 2, -1).should.equal(1)
    math.add('1', '1').should.equal('11')
    math.add(1 * 4, 2).should.equal(6)
    math.add(-2, 2).should.equal(0)
  })

  it('should not return result of a + b', function () {
    math.add(-0, 2).should.not.equal(4)
    math.add(3 * 2, 2).should.not.equal(4)
    math.add('1', 2).should.not.equal(4)
    math.add(0, 0).should.not.equal('4')
    math.add('2', 0).should.not.equal(3)
    math.add(-3, 1).should.not.equal(31)
  })
})

// -----------------------------------------------------------------------------
// SUBSTRACTION

describe('Math.substract(a, b)', function () {
  it('should return exactly the result of a - b', function () {
    math.substract(-1, -1).should.equal(0)
    math.substract(1 * 2, -1).should.equal(3)
    math.substract('1', '1').should.equal(0)
    math.substract('1', '2').should.equal(-1)
    math.substract(1 * 4, 2).should.equal(2)
    math.substract(-2, 2).should.equal(-4)
  })

  it('should return other result of a - b', function () {
    math.substract(-0, 2).should.not.equal(4)
    math.substract(3 * 2, 3).should.not.equal(4)
    math.substract('1', 2).should.not.equal(4)
    math.substract('1', '2').should.not.equal(-3)
    math.substract(1 * 4, 2).should.not.equal(3)
    math.substract(-2, 2).should.not.equal(-5)
  })
})

// -----------------------------------------------------------------------------
// MULTIPLICATION

describe('Math.multiply(a, b)', function () {
  it('should return the result of a * b', function () {
    expect(math.multiply(-1, -1)).to.equal(1)
    expect(math.multiply(1 * 2, -1)).to.equal(-2)
    expect(math.multiply('1', '1')).to.equal(1)
    expect(math.multiply('1', '2')).to.equal(2)
    expect(math.multiply(1 * 4, 2)).to.equal(8)
    expect(math.multiply(-2, 2)).to.equal(-4)
  })

  it('should return other result of a * b', function () {
    expect(math.multiply(-0, 2)).to.not.equal(3)
    expect(math.multiply(3 * 2, 3)).to.not.equal(-18)
    expect(math.multiply('1', 2)).to.not.equal(-2)
    expect(math.multiply('1', '2')).not.equal(-3)
    expect(math.multiply(1 * 4, 2)).not.equal(-8)
    expect(math.multiply(-2, 2)).not.equal(-3)
  })
})

// -----------------------------------------------------------------------------
// DIVISION

describe('Math.divide(a, b)', function () {
  it('should return the result of a / b', function () {
    expect(math.divide(-1, -1)).to.equal(1)
    expect(math.divide(1 * 2, -1)).to.equal(-2)
    expect(math.divide('1', '1')).to.equal(1)
    expect(math.divide('1', '2')).to.equal(0.5)
    expect(math.divide(1 * 4, 2)).to.equal(2)
    expect(math.divide(-2, 2)).to.equal(-1)
  })

  it('should return other result of a / b', function () {
    expect(math.divide(-0, 2)).to.not.equal(3)
    expect(math.divide(3 * 2, 3)).to.not.equal(-18)
    expect(math.divide('1', 2)).to.not.equal(-2)
    expect(math.divide('1', '2')).to.not.equal(-3)
    expect(math.divide(1 * 4, 2)).to.not.equal(-8)
    expect(math.divide(-2, 2)).to.not.equal(-3)
  })
})

// -----------------------------------------------------------------------------
// EXPONENT

describe('Math.exponent(a)', function () {
  it('should return the result of a * a', function () {
    expect(math.exponent(-1)).to.equal(1)
    expect(math.exponent(1 * 2)).to.equal(4)
    expect(math.exponent('1')).to.equal(1)
    expect(math.exponent('15')).to.equal(225)
    expect(math.exponent(1 * 4)).to.equal(16)
    expect(math.exponent(-2)).to.equal(4)
  })

  it('should return other result of a * a', function () {
    expect(math.exponent(-0)).to.not.equal(3)
    expect(math.exponent(-4)).to.not.equal(-18)
    expect(math.exponent('12')).to.not.equal(-2)
    expect(math.exponent('1')).to.not.equal(-3)
    expect(math.exponent(1 * 4)).to.not.equal(-8)
    expect(math.exponent(-2)).to.not.equal(-3)
  })
})

// -----------------------------------------------------------------------------
// ROOT

describe('Math.root(a)', function () {
  it('should return the result of sqrt(a)', function () {
    expect(math.root(1)).to.equal(1)
    expect(math.root(1 * 4)).to.equal(2)
    expect(math.root('1')).to.equal(1)
    expect(math.root('16')).to.equal(4)
    expect(math.root(1 * 4)).to.equal(2)
    expect(math.root(4)).to.equal(2)
  })

  it('should return other result of sqrt(a)', function () {
    expect(math.root(0)).to.not.equal(3)
    expect(math.root(4)).to.not.equal(-18)
    expect(math.root('12')).to.not.equal(-2)
    expect(math.root('1')).to.not.equal(-3)
    expect(math.root(1 * 4)).to.not.equal(-8)
    expect(math.root(2)).to.not.equal(-3)
  })
})

console.log('ALL TESTS PASSED!')
