const math      = require('../index')
const assert    = require('assert');

//===========================================================
assert.equal(math.add(1,5), 6);
assert.equal(math.add(6), 'masukkkan dua angka');
assert.equal(math.add('number',5), 'masukkkan number');
assert.notEqual(math.add(1,5), 0);
assert.strictEqual(math.add(1,5), 6);
//===========================================================
assert.equal(math.substract(10,5), 5);
assert.equal(math.substract(1), 'masukkkan dua angka');
assert.equal(math.substract('number',5), 'masukkkan number');
assert.notEqual(math.substract(10,5), 0);
assert.strictEqual(math.substract(10,5), 5);
//===========================================================
assert.equal(math.multiply(1,5), 5);
assert.equal(math.multiply(1), 'masukkkan dua angka');
assert.equal(math.multiply('number',5), 'masukkkan number');
assert.notEqual(math.multiply(1,5), 0);
assert.strictEqual(math.multiply(1,5), 5);
//===========================================================
assert.equal(math.divide(64,2), 32);
assert.equal(math.divide(1), 'masukkkan dua angka');
assert.equal(math.divide('number',5), 'masukkkan number');
assert.notEqual(math.divide(1,5), 0);
assert.strictEqual(math.divide(64,2), 32);
//===========================================================
assert.equal(math.exponent(5), 25);
assert.equal(math.exponent(), 'masukkkan hanya satu angka');
assert.equal(math.exponent('number'), 'masukkkan number');
assert.notEqual(math.exponent(10), 25);
assert.strictEqual(math.exponent(5), 25);
//===========================================================
assert.equal(math.root(9), 3);
assert.equal(math.root(), 'masukkkan hanya satu angka');
assert.equal(math.root('number'), 'masukkkan number');
assert.notEqual(math.root(12), 3);
assert.strictEqual(math.root(9), 3);
//===========================================================
