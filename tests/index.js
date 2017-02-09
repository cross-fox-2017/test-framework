const assert = require('assert')
const math = require('../index').math
const run = require('../index').run

const objects = [
  {
    name: 'Fadly Kayo',
    hobi: 'Belajar',
    umur: 26
  },
  {
    name: 'Iqbal Bol',
    hobi: 'Makan',
    umur: 18
  }
]

const objects1 = [
  {
    name: 'Fadly Kayo',
    hobi: 'Belajar',
    umur: 26
  },
  {
    name: 'Iqbal Bol',
    hobi: 'Makan',
    umur: 18
  }
]

// -----------------------------------------------------------------------------
// ADDITION

assert.equal(math.add(0, 0), 0)
assert.equal(math.add(0), 'Error')
assert.equal(math.add(0, 0), '0')
assert.equal(math.add(-0, -0), 0)
assert.equal(math.add(-1, -1), -2)
assert.equal(math.add(1 * 2, -1), 1)
assert.equal(math.add('1', '1'), '11')
assert.notEqual(math.add(-0, 2), 4)
assert.notEqual(math.add(3 * 2, 2), 4)
assert.notEqual(math.add('1', 2), 4)
assert.strictEqual(math.add('1', '2'), '12')
assert.strictEqual(math.add(1 * 4, 2), 6)
assert.strictEqual(math.add(-2, 2), 0)
assert.notStrictEqual(math.add(0, 0), '4')
assert.notStrictEqual(math.add('2', 0), 3)
assert.notStrictEqual(math.add(-3, 1), 31)

// -----------------------------------------------------------------------------
// SUBSTRACTION

assert.equal(math.substract(-1, -1), 0)
assert.equal(math.substract(1 * 2, -1), 3)
assert.equal(math.substract('1', '1'), '')
assert.notEqual(math.substract(-0, 2), 4)
assert.notEqual(math.substract(3 * 2, 3), 4)
assert.notEqual(math.substract('1', 2), 4)
assert.strictEqual(math.substract('1', '2'), -1)
assert.strictEqual(math.substract(1 * 4, 2), 2)
assert.strictEqual(math.substract(-2, 2), -4)
assert.notStrictEqual(math.substract('1', '2'), -3)
assert.notStrictEqual(math.substract(1 * 4, 2), 3)
assert.notStrictEqual(math.substract(-2, 2), -5)

// -----------------------------------------------------------------------------
// MULTIPLICATION

assert.equal(math.multiply(-1, -1), 1)
assert.equal(math.multiply(1 * 2, -1), -2)
assert.equal(math.multiply('1', '1'), 1)
assert.notEqual(math.multiply(-0, 2), 3)
assert.notEqual(math.multiply(3 * 2, 3), -18)
assert.notEqual(math.multiply('1', 2), -2)
assert.strictEqual(math.multiply('1', '2'), 2)
assert.strictEqual(math.multiply(1 * 4, 2), 8)
assert.strictEqual(math.multiply(-2, 2), -4)
assert.notStrictEqual(math.multiply('1', '2'), -3)
assert.notStrictEqual(math.multiply(1 * 4, 2), -8)
assert.notStrictEqual(math.multiply(-2, 2), -3)

// -----------------------------------------------------------------------------
// DIVISION

assert.equal(math.divide(-1, -1), 1)
assert.equal(math.divide(1 * 2, -1), -2)
assert.equal(math.divide('1', '1'), 1)
assert.notEqual(math.divide(-0, 2), 3)
assert.notEqual(math.divide(3 * 2, 3), -18)
assert.notEqual(math.divide('1', 2), -2)
assert.strictEqual(math.divide('1', '2'), 0.5)
assert.strictEqual(math.divide(1 * 4, 2), 2)
assert.strictEqual(math.divide(-2, 2), -1)
assert.notStrictEqual(math.divide('1', '2'), -3)
assert.notStrictEqual(math.divide(1 * 4, 2), -8)
assert.notStrictEqual(math.divide(-2, 2), -3)

// -----------------------------------------------------------------------------
// EXPONENT

assert.equal(math.exponent(-1), 1)
assert.equal(math.exponent(1 * 2), 4)
assert.equal(math.exponent('1'), 1)
assert.notEqual(math.exponent(-0), 3)
assert.notEqual(math.exponent(-4), -18)
assert.notEqual(math.exponent('12'), -2)
assert.strictEqual(math.exponent('15'), 225)
assert.strictEqual(math.exponent(1 * 4), 16)
assert.strictEqual(math.exponent(-2), 4)
assert.notStrictEqual(math.exponent('1'), -3)
assert.notStrictEqual(math.exponent(1 * 4), -8)
assert.notStrictEqual(math.exponent(-2), -3)

// -----------------------------------------------------------------------------
// ROOT

assert.equal(math.root(1), 1)
assert.equal(math.root(1 * 4), 2)
assert.equal(math.root('1'), 1)
assert.notEqual(math.root(0), 3)
assert.notEqual(math.root(4), -18)
assert.notEqual(math.root('12'), -2)
assert.strictEqual(math.root('16'), 4)
assert.strictEqual(math.root(1 * 4), 2)
assert.strictEqual(math.root(4), 2)
assert.notStrictEqual(math.root('1'), -3)
assert.notStrictEqual(math.root(1 * 4), -8)
assert.notStrictEqual(math.root(2), -3)

// -----------------------------------------------------------------------------

assert.deepEqual(run.data.getFirstObject(objects), objects[0])
assert.deepEqual(objects, objects1)

console.log('ALL TESTS PASSED!')
