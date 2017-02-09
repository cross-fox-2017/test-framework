var assert = require('assert')
var math = require('../index.js')
var should = require('chai').should()


//add==========================================================================

describe('Checking Add Operation', function() {
  it('result must be 3', function() {
      math.add(1,2).should.equal(3);
  });
  it('result must be masukan dua angka', function() {
      math.add(2).should.equal("masukan dua angka");
  });
  it('input should be a number', function() {
      math.add(3,2).should.be.a("number")
  });
  it('input should be a number', function() {
      math.add("halo",2).should.equal("masukan number")
  });
})

//substract====================================================================

describe('Checking substract Operation', function() {
  it('result must be 1', function() {
      math.substract(5,4).should.equal(1);
  });
  it('result must be masukan dua angka', function() {
      math.substract(4).should.equal("masukan dua angka");
  });
  it('input should be a number', function() {
      math.substract(5,4).should.be.a("number")
  });
  it('input should be a number', function() {
      math.substract("halo",4).should.equal("masukan number")
  });
});

//multiply=====================================================================

describe('Checking multiply Operation', function() {
  it('result must be 3', function() {
      math.multiply(5,5).should.equal(25);
  });
  it('result must be masukan dua angka', function() {
      math.multiply(5).should.equal("masukan dua angka");
  });
  it('input should be a number', function() {
      math.multiply(5,5).should.be.a("number")
  });
  it('input should be a number', function() {
      math.multiply("halo",5).should.equal("masukan number")
  });
});

//divide=======================================================================

describe('Checking devide Operation', function() {
  it('result must be 5', function() {
      math.divide(25,5).should.equal(5);
  });
  it('result must be masukan dua angka', function() {
      math.divide(5).should.equal("masukan dua angka");
  });
  it('input should be a number', function() {
      math.divide(25,5).should.be.a("number")
  });
  it('input should be a number', function() {
      math.divide("halo",5).should.equal("masukan number")
  });
});

//exponent=====================================================================


describe('Checking exponent Operation', function() {
  it('result must be 5', function() {
      math.exponent(5).should.equal(25);
  });
  it('input should be a number', function() {
      math.exponent(25).should.be.a("number")
  });
  it('input should be a number', function() {
      math.exponent("halo").should.equal("masukan number")
  });
});


//root=========================================================================


describe('Checking root Operation', function() {
  it('result must be 5', function() {
      math.root(25).should.equal(5);
  });
  it('input should be a number', function() {
      math.root(25).should.be.a("number")
  });
  it('input should be a number', function() {
      math.root("halo").should.equal("masukan number")
  });
});
