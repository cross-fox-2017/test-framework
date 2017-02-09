const chai = require('chai').should();
const math = require('../index');

let testAdd1 = math.add(2,3);
let testAdd2 = math.add("2","3");
let testAdd3 = math.add();

let testSubstract1 = math.substract(2,3);
let testSubstract2 = math.substract("2","3");
let testSubstract3 = math.substract();

let testMultiply1 = math.multiply(2,3);
let testMultiply2 = math.multiply("2","3");
let testMultiply3 = math.multiply();

let testDivide1 = math.divide(2,3);
let testDivide2 = math.divide("2","3");
let testDivide3 = math.divide();

let testExponent1 = math.exponent(2,3);
let testExponent2 = math.exponent("2","3");
let testExponent3 = math.exponent();

let testRoot1 = math.root(2,3);
let testRoot2 = math.root("2","3");
let testRoot3 = math.root();


describe('Fungsi Matematik', function() {
  describe('Tatambahan', function() {

    it('hasilna pertambahannya bener', function() {
      testAdd1.should.equal(5);
    })
    it('parameterna kudu number', function(){
      testAdd2.should.equal('datana kudu number bray')
    })
    it('parameterna kudu diisi duanana', function(){
      testAdd3.should.equal('parameterna diisi atuh')
    })
    it('hasilna kudu number', function(){
      testAdd1.should.be.a('number')
    })

  })

  describe('Kukurangan', function() {

    it('hasilna penguranganna bener', function() {
      testSubstract1.should.equal(-1);
    })
    it('parameterna kudu number', function(){
      testSubstract2.should.equal('datana kudu number bray')
    })
    it('parameterna kudu diisi duanana', function(){
      testSubstract3.should.equal('parameterna diisi atuh')
    })
    it('hasilna kudu number', function(){
      testSubstract1.should.be.a('number')
    })

  })

  describe('Kakalian', function() {

    it('hasilna perkalianna bener', function() {
      testMultiply1.should.equal(6);
    })
    it('parameterna kudu number', function(){
      testMultiply2.should.equal('datana kudu number bray')
    })
    it('parameterna kudu diisi duanana', function(){
      testMultiply3.should.equal('parameterna diisi atuh')
    })
    it('hasilna kudu number', function(){
      testMultiply1.should.be.a('number')
    })

  })

  describe('Babagian', function() {

    it('hasilna pembagianna bener', function() {
      testDivide1.should.equal(0.6666666666666666);
    })
    it('parameterna kudu number', function(){
      testDivide2.should.equal('datana kudu number bray')
    })
    it('parameterna kudu diisi duanana', function(){
      testDivide3.should.equal('parameterna diisi atuh')
    })
    it('hasilna kudu number', function(){
      testDivide1.should.be.a('number')
    })

  })

  describe('Papangkatan', function() {

    it('hasilna perpangkatanna bener', function() {
      testExponent1.should.equal(8);
    })
    it('parameterna kudu number', function(){
      testExponent2.should.equal('datana kudu number bray')
    })
    it('parameterna kudu diisi duanana', function(){
      testExponent3.should.equal('parameterna diisi atuh')
    })
    it('hasilna kudu number', function(){
      testExponent1.should.be.a('number')
    })

  })

  describe('Aakaran', function() {

    it('hasilna pengakaranna bener', function() {
      testRoot1.should.equal(1.4142135623730951);
    })
    it('parameterna kudu number', function(){
      testRoot2.should.equal('datana kudu number bray')
    })
    it('parameterna kudu diisi duanana', function(){
      testRoot3.should.equal('parameterna diisi atuh')
    })
    it('hasilna kudu number', function(){
      testRoot1.should.be.a('number')
    })

  })
})
