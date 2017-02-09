var assert = require('assert')
var chai = require('chai')
var should = chai.should()
var expect = chai.expect;

const matematika = require('../index');

describe('somethin', function() {
  it('expect evertying to be ok', function() {
    expect('everything').to.be.ok;
  })
})
// -----------------------------------------------------------------------------
// Penambahan

describe('fungsi penambahan', function() {
  it('fungsi berjalan sesuai dengan fungsinya', function() {
    expect(matematika.penambahan(1,1)).to.equal(2)
    expect(matematika.penambahan(-1,-1)).to.equal(-2)
    expect(matematika.penambahan(2*2,4*4)).to.equal(20)
    })
    it('input harus diisi dan harus angka', function() {
    expect(matematika.penambahan("1", "2")).to.equal("Input is Required and must in Number")
    expect(matematika.penambahan(1)).to.equal("Input is Required and must in Number")
  })
})
// -----------------------------------------------------------------------------
// pengurangan

describe('pengurangan', function() {
  it('fungsi berjalan sesuai dengan fungsinya', function() {
    expect(matematika.pengurangan(3,1)).to.equal(2)
    })
    it('input harus diisi dan harus angka', function() {
    expect(matematika.pengurangan("1", "2")).to.equal("Input is Required and must in Number")
    expect(matematika.pengurangan(1)).to.equal("Input is Required and must in Number")
  })
})
// -----------------------------------------------------------------------------
// perkalian

describe('perkalian', function() {
  it('fungsi berjalan sesuai dengan fungsinya', function() {
    expect(matematika.perkalian(0,0)).to.equal(0)
    expect(matematika.perkalian(0,1)).to.equal(0)
    expect(matematika.perkalian(2,2)).to.equal(4)
    expect(matematika.perkalian(-2,2)).to.equal(-4)
    })
    it('input harus diisi dan harus angka', function() {
    expect(matematika.perkalian("9", "3")).to.equal("Input is Required and must in Number")
    expect(matematika.perkalian(3)).to.equal("Input is Required and must in Number")
  })
})
// -----------------------------------------------------------------------------
// pembagian

describe('fungsi pembagian', function() {
  it('fungsi operasi berjalan sesuai fungsinya', function() {
    matematika.pembagian(4,2).should.equal(2)
    matematika.pembagian(2,4).should.equal(0.5)
    matematika.pembagian(-3,-2).should.equal(1.5)
  })
  it('input harus diisi dan harus angka', function() {
    matematika.pembagian("7", "3").should.equal("Input is Required and must in Number")
    matematika.pembagian(4).should.equal("Input is Required and must in Number")
  })
})
// -----------------------------------------------------------------------------
// pangkat

describe('fungsi perpangkatan', function() {
  it('fungsi operasi berjalan sesuai fungsinya', function() {
    matematika.pangkat(4,2).should.equal(16)
    matematika.pangkat(4).should.equal(16)
    })
    it('input harus diisi dan harus angka', function() {
    matematika.pangkat("6", "4").should.equal("Input is Required and must in Number")
    matematika.pangkat().should.equal("Input is Required and must in Number")
  })
})
// -----------------------------------------------------------------------------
// akar

describe('fungsi akar pangkat', function() {
  it('fungsi operasi berjalan sesuai fungsinya', function() {
    matematika.akar(4).should.equal(2)
    })
    it('input harus angka positive', function() {
    matematika.akar(-12).should.equal('Must a Positive Number')
    })
    it('input harus diisi dan harus angka', function() {
    matematika.akar("4").should.equal("Input is Required and must in Number")
    matematika.akar().should.equal("Input is Required and must in Number")
  })
})
