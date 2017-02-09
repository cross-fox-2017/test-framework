var controller = require('../controller/controller')
var assert = require('assert');
var should = require('chai').should()

describe('Testing fungsi matematika ', function() {
  describe('Testing fungsi penambahan', function() {
    it('testing input = hasil', function() {
      controller.add(1,1).should.be.a('number')
      controller.add(1,1).should.equal(2)
    });
    it('testing input no paramter', function() {
      controller.add().should.equal('require two parameter')
    });
    it('testing input bukan number', function() {
      controller.add('1','2').should.equal('is not a number')
    });
  });

  describe('Testing fungsi pengurangan', function() {
    it('testing input = hasil', function() {
      controller.substract(3,1).should.be.a('number')
      controller.substract(3,1).should.equal(2)
    });
    it('testing input no paramter', function() {
      controller.substract().should.equal('require two parameter')
    });
    it('testing input bukan number', function() {
      controller.substract('1','2').should.equal('is not a number')
    });
  });

  describe('Testing fungsi perkalian', function() {
    it('testing input = hasil', function() {
      controller.multiply(3,1).should.be.a('number')
      controller.multiply(3,1).should.equal(3)
    });
    it('testing input no paramter', function() {
      controller.multiply().should.equal('require two parameter')
    });
    it('testing input bukan number', function() {
      controller.multiply('1','2').should.equal('is not a number')
    });
  });

  describe('Testing fungsi pembagian', function() {
    it('testing input = hasil', function() {
      controller.divider(3,1).should.be.a('number')
      controller.divider(3,1).should.equal(3)
    });
    it('testing input no paramter', function() {
      controller.divider().should.equal('require two parameter')
    });
    it('testing input bukan number', function() {
      controller.divider('1','2').should.equal('is not a number')
    });
  });


  describe('Testing fungsi kuadrat', function() {
    it('testing input = hasil', function() {
      controller.akar(9).should.be.a('number')
      controller.akar(9).should.equal(3)
    });
    it('testing input no paramter', function() {
      controller.akar().should.equal('require two parameter')
    });
    it('testing input bukan number', function() {
      controller.akar('1','2').should.equal('is not a number')
    });
  });

  describe('Testing fungsi pangkat', function() {
    it('testing input = hasil', function() {
      controller.pangkat(3,1).should.be.a('number')
      controller.pangkat(3,1).should.equal(3)
    });
    it('testing input no paramter', function() {
      controller.pangkat().should.equal('require two parameter')
    });
    it('testing input bukan number', function() {
      controller.pangkat('1','2').should.equal('is not a number')
    });
  });
});

  // describe('Testing fungsi pengurangan', function() {
  //
  // });
