const assert = require('assert');
const test   = require('../script.js')

assert.equal(test.pertambahan(2,2),4)
assert.equal(test.pertambahan(2),'invalid parameters')

assert.equal(test.pengurangan(5,3),2)
assert.equal(test.pengurangan(8,'3'),'parameters must be number')

assert.equal(test.perkalian(5,3),15)
assert.equal(test.perkalian(8), 'parameters required')

assert.equal(test.pembagian(24,3),8)
assert.equal(test.pembagian(27,'asdasd'),'parameters must be number')

assert.equal(test.pangkat(2,3),8)
assert.equal(test.pembagian(27,'cs2c'),'parameters must be number')

assert.equal(test.akar(64), 8)
assert.equal(test.akar('asdasdasd'), 'parameters must be number')

assert.equal(test.random(60,40), 9)
assert.equal(test.random(60), 'parameters required')
