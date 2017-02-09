
const assert = require('assert');
const should = require('chai').should()

const testingMath1 = require('./math/add');
const testingMath2 = require('./math/divide');
const testingMath3 = require('./math/exponent');
const testingMath4 = require('./math/multiply');
const testingMath5 = require('./math/root');
const testingMath6 = require('./math/substract');

describe('Testing Fungsi Matematika', function() {
  describe('Pertambahan',function() {
      it('Operasi Harus Benar',function() {
        testingMath1.mathAdd(1,1).should.equal(2);
      })
      it('Tipe Data Input Harus Number',function() {
        testingMath1.mathAdd(1,1).should.be.a("number");
      })
  })

  describe('Pengurangan',function() {

  })

  describe('Perkalian',function() {

  })

  describe('Pembagian',function() {

  })

  describe('Pangkat',function() {

  })

  describe('Akar',function() {

  })

})

// assert.equal(testingMath2.mathDivide(1,1),0)
// assert.equal(testingMath2.mathDivide(2),false)
//
//
// assert.equal(testingMath3.mathExponent(2,1),2)
// assert.equal(testingMath3.mathExponent(2),false)
//
// assert.equal(testingMath4.mathMultiply(2,2),4)
// assert.equal(testingMath4.mathMultiply(2),false)
//
// assert.equal(testingMath5.mathRoot(5,5),3125)
// assert.equal(testingMath5.mathRoot(2),false)
//
// assert.equal(testingMath6.mathSubstract(9),3)
// assert.equal(testingMath6.mathSubstract(),false)
