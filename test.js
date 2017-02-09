const assert = require('assert');
const should = require('chai').should()

const testingMath1 = require('./math/add');
const testingMath2 = require('./math/divide');
const testingMath3 = require('./math/exponent');
const testingMath4 = require('./math/multiply');
const testingMath5 = require('./math/root');
const testingMath6 = require('./math/substract');

describe('Testing Fungsi Matematika', function() {
    describe('Pertambahan', function() {
        it('Operasi Harus Benar', function() {
            testingMath1.mathAdd(1, 1).should.equal(2);
        })
        it('Tipe Data Input Harus Number', function() {
            testingMath1.mathAdd(1, 1).should.be.a("number");
        })
    })

    describe('Pengurangan', function() {
        it('Operasi Harus Benar', function() {
            testingMath2.mathDivide(1, 1).should.equal(0);
        })
        it('Tipe Data Input Harus Number', function() {
            testingMath2.mathDivide(1, 1).should.be.a("number");
        })
    })

    describe('Perkalian', function() {
        it('Operasi Harus Benar', function() {
            testingMath4.mathMultiply(2, 2).should.equal(4);
        })
        it('Tipe Data Input Harus Number', function() {
            testingMath4.mathMultiply(2, 2).should.be.a("number");
        })
    })


    describe('Pembagian', function() {
        it('Operasi Harus Benar', function() {
            testingMath3.mathExponent(2, 1).should.equal(2);
        })
        it('Tipe Data Input Harus Number', function() {
            testingMath3.mathExponent(2, 1).should.be.a("number");
        })
    })

    describe('Pangkat', function() {
        it('Operasi Harus Benar', function() {
            testingMath5.mathRoot(5, 5).should.equal(3125);
        })
        it('Tipe Data Input Harus Number', function() {
            testingMath5.mathRoot(5, 5).should.be.a("number");
        })
    })

    describe('Akar', function() {
        it('Operasi Harus Benar', function() {
            testingMath6.mathSubstract(9).should.equal(3);
        })
        it('Tipe Data Input Harus Number', function() {
            testingMath6.mathSubstract(9).should.be.a("number");
        })
    })

})
