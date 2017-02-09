var assert = require('assert')
var math = require('../index.js')


//add==========================================================================
assert.equal(math.add(1,2),"3");
assert.equal(math.add(1,2),3);
assert.equal(math.add(2),"masukan dua angka");
assert.equal(math.add("halo",2),"masukan number");
assert.notEqual(math.add(1,2),4);
assert.strictEqual(math.add(1,2),3);

//substract====================================================================
assert.equal(math.substract(5,4),"1");
assert.equal(math.substract(5,4),1);
assert.equal(math.substract(4),"masukan dua angka");
assert.equal(math.substract("halo",4),"masukan number");
assert.notEqual(math.substract(5,4),2);
assert.strictEqual(math.substract(5,4),1);

//multiply=====================================================================
assert.equal(math.multiply(5,5),"25");
assert.equal(math.multiply(5,5),25);
assert.equal(math.multiply(5),"masukan dua angka");
assert.equal(math.multiply("halo",5),"masukan number");
assert.notEqual(math.multiply(5,5),20);
assert.strictEqual(math.multiply(5,5),25);

//divide=======================================================================
assert.equal(math.divide(25,5),"5");
assert.equal(math.divide(25,5),5);
assert.equal(math.divide(5),"masukan dua angka");
assert.equal(math.divide("halo",5),"masukan number");
assert.notEqual(math.divide(25,5),4);
assert.strictEqual(math.divide(25,5),5);

//exponent=====================================================================
assert.equal(math.exponent(5),"25");
assert.notEqual(math.exponent(5),24);
assert.strictEqual(math.exponent(5),25);

//root=========================================================================
assert.equal(math.root(25),"5");
assert.notEqual(math.root(25),4);
assert.strictEqual(math.root(25),5);
