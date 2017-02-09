var assert = require('assert')
const matematika = require('../index');

// -----------------------------------------------------------------------------
// Penambahan

assert.equal(matematika.penambahan(1,1), 2)
assert.equal(matematika.penambahan(-1,-1), -2)
assert.equal(matematika.penambahan(2*2,4*4), 20)
assert.equal(matematika.penambahan("1", "2"), "Input is Required and must in Number")
assert.equal(matematika.penambahan(1), "Input is Required and must in Number")

// -----------------------------------------------------------------------------
// pengurangan

assert.equal(matematika.pengurangan(3,1), 2)
assert.equal(matematika.pengurangan("1", "2"), "Input is Required and must in Number")
assert.equal(matematika.pengurangan(1), "Input is Required and must in Number")

// -----------------------------------------------------------------------------
// perkalian

assert.equal(matematika.perkalian(0,0), 0)
assert.equal(matematika.perkalian(0,1), 0)
assert.equal(matematika.perkalian(2,2), 4)
assert.equal(matematika.perkalian(-2,2), -4)
assert.equal(matematika.perkalian("9", "3"), "Input is Required and must in Number")
assert.equal(matematika.perkalian(3), "Input is Required and must in Number")

// -----------------------------------------------------------------------------
// pembagian

assert.equal(matematika.pembagian(4,2), 2)
assert.equal(matematika.pembagian(2,4), 0.5)
assert.equal(matematika.pembagian(-3,-2), 1.5)
assert.equal(matematika.pembagian("7", "3"), "Input is Required and must in Number")
assert.equal(matematika.pembagian(4), "Input is Required and must in Number")

// -----------------------------------------------------------------------------
// pangkat

assert.equal(matematika.pangkat(4,2), 16)
assert.equal(matematika.pangkat(4), 16)
assert.equal(matematika.pangkat("6", "4"), "Input is Required and must in Number")
assert.equal(matematika.pangkat(), "Input is Required and must in Number")

// -----------------------------------------------------------------------------
// akar

assert.equal(matematika.akar(4), 2)
assert.equal(matematika.akar(-12), 'Must a Positive Number')
assert.equal(matematika.akar("4"), "Input is Required and must in Number")
assert.equal(matematika.akar(), "Input is Required and must in Number")
