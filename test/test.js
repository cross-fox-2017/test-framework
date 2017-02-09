var should = require('chai').should() // actually call the function
const mathematic = require('./function')

describe('Testing mathematic function', function () {

  /* Testing function penambahan */
  describe('Testing function penambahan', function () {
    it('check output, pertambahan(1,1) should be 2', function () {
      mathematic.pertambahan(1, 1).should.equal(2)
    })
    it("check input, you can't fill parameter with string or empty", function () {
      mathematic.pertambahan().should.equal('input must number not string or empty')
    })
  })

  /* Testing function pengurangan */
  describe('Testing function pengurangan', function () {
    // expected output
    it('check output, pengurangan(4,2) should be 2', function () {
      mathematic.pengurangan(4, 2).should.equal(2)
    })
    // error
    it('check input, first Parameter must greater than second Parameter', function () {
      mathematic.pengurangan(2, 4).should.equal('a must be high then b')
    })
    // error
    it("check input, you can't fill parameter with string or empty", function () {
      mathematic.pengurangan().should.equal('input must number not string or empty')
    })
  })

  /* Testing function perkalian */
  describe('Testing function perkalian', function () {
    // expected output
    it('check output, perkalian(100,1) should be 100', function () {
      mathematic.perkalian(100, 1).should.equal(100)
    })
    // expected ouput
    it('check output, perkalian(1,100) should be 100', function () {
      mathematic.perkalian(1, 100).should.equal(100)
    })
    // err
    it("check input, you can't fill parameter with string or empty", function () {
      mathematic.perkalian().should.equal('input must number not string or empty')
    })
  })

  /* Testing function  pembagian */
  describe('Testing function pembagian', function () {
    // expected output
    it('check output, pembagian(200,2) should be 100', function () {
      mathematic.pembagian(200, 2).should.equal(100)
    })
    // error
    it('check input, first Parameter must greater than second Parameter', function () {
      mathematic.pembagian(2, 200).should.equal('a must be high then b')
    })
    // error
    it("check input, you can't fill parameter with string or empty", function () {
      mathematic.pembagian().should.equal('input must number not string or empty')
    })
  })

  /* Testing function pangkat */
  describe('Testing function pangkat', function () {
    it('check output, pangkat(2,3) should be 8', function () {
      mathematic.pangkat(2, 3).should.equal(8)
    })
    it("check input, you can't fill parameter with string or empty", function () {
      mathematic.pangkat().should.equal('input must number not string or empty')
    })
  })

  /* Testing function akar */
  describe('Testing function akar', function () {
    it('check output, akar(9) should be 3', function () {
      mathematic.akar(9).should.equal(3)
    })
    it("check input, you can't fill parameter with string or empty", function () {
      mathematic.akar().should.equal('input must number not string or empty')
    })
  })
}) /* end Testing Math function */
