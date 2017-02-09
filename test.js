const assert = require('assert');
const test   = require('../script.js')
const should = require('chai').should()

  describe('Test -> Add operation :', function() {
    it('Math operation should correct (add)', function() {
      test.pertambahan(2,2).should.equal(4);
    });

    it('parameter must be required', function() {
      test.pertambahan(2).should.equal("invalid parameters");
    });

    it('paramaters must be a number', function() {
      test.pertambahan(2,'2').should.equal('invalid parameters');
    })
  })

  describe('Test -> Substract operation :', function() {
    it('Math operation should correct (substract)', function() {
      test.pengurangan(5,3).should.equal(2);
    });

    it('Parameter must be required', function() {
      test.pengurangan(2).should.equal("invalid parameters");
    });

    it('Paramaters must be a number', function() {
      test.pengurangan(8,'3').should.equal('invalid parameters');
    })
  })

  describe('Test -> Multiply operation :', function() {
    it('Math operation should correct (multiply)', function() {
      test.perkalian(5,3).should.equal(15);
    });

    it('Parameter must be required', function() {
      test.perkalian(8).should.equal("invalid parameters");
    });

    it('Paramaters must be a number', function() {
      test.perkalian(0, false).should.equal('invalid parameters');
    })
  })

  describe('Test -> Divide operation :', function() {
    it('Math operation should correct (divide)', function() {
      test.pembagian(24,3).should.equal(8);
    });

    it('Parameter must be required', function() {
      test.pembagian(100).should.equal("invalid parameters");
    });

    it('Paramaters must be a number', function() {
      test.perkalian(null, 'asdasdasd').should.equal('invalid parameters');
    })
  })

  describe('Test -> Divide operation :', function() {
    it('Math operation should correct (divide)', function() {
      test.pembagian(24,3).should.equal(8);
    });

    it('Parameter must be required', function() {
      test.pembagian(100).should.equal("invalid parameters");
    });

    it('Paramaters must be a number', function() {
      test.pembagian(null, 'asdasdasd').should.equal('invalid parameters');
    })
  })

  describe('Test -> Powers operation :', function() {
    it('Math operation should correct (power)', function() {
      test.pangkat(2,3).should.equal(8);
    });

    it('Parameter must be required', function() {
      test.pangkat(4).should.equal("invalid parameters");
    });

    it('Paramaters must be a number', function() {
      test.pangkat(null, 'asdasdasd').should.equal('invalid parameters');
    })
  })

  describe('Test -> Square Root operation :', function() {
    it('Math operation should correct (square root)', function() {
      test.akar(100).should.equal(10);
    });

    it('Parameter must be required', function() {
      test.akar().should.equal('invalid parameters');
    });

    it('Paramaters must be a number', function() {
      test.akar(null).should.equal('invalid parameters');
    })
  })

  describe('Test -> Random operation :', function() {
    it('Math operation should correct', function() {
      test.random(60,40).should.equal(9);
    });

    it('Parameter must be required', function() {
      test.random().should.equal('invalid parameters');
    });

    it('Paramaters must be a number', function() {
      test.random(null).should.equal('invalid parameters');
    })
  })
