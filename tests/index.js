
const assert = require('assert');
const testingMath1 = require('../add');
const testingMath2 = require('../divide');
const testingMath3 = require('../exponent');
const testingMath4 = require('../multiply');
const testingMath5 = require('../root');
const testingMath6 = require('../substract');


// assert.equal(testingMath1.mathAdd(1,1),2)
// assert.equal(testingMath1.mathAdd(2),false)
//
// assert.equal(testingMath2.mathDivide(1,1),0)
// assert.equal(testingMath2.mathDivide(2),false)
//
//
assert.equal(testingMath3.mathExponent(2,1),2)
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
