var expect = require('chai').expect

// var TEST = require('../controller/test')
var MATH = require('../controller/math')

describe('TESTING - fungsi penambahan', function () {
  it('RESULT - Pertambahan 2 + 2 = 4', function () {
    expect(MATH.pertambahan(2, 2)).to.equal(4)
  })
  it('RESULT - Validasi parameter kalau bukan angka', function () {
    expect(MATH.pertambahan()).to.equal(`Parameter must be Number`)
  })
})

describe('TESTING - fungsi pengurangan', function () {
  it('RESULT - Pertambahan 2 - 2 = 0', function () {
    expect(MATH.perkurangan(2, 2)).to.equal(0)
  })

  it('RESULT - Validasi parameter kalau bukan angka', function () {
    expect(MATH.perkurangan('irsan', 2)).to.equal(`Parameter must be Number`)
  })
})

describe('TESTING - fungsi perkalian', function () {
  it('RESULT - Pertambahan 2 * 2 = 4', function () {
    expect(MATH.perkalian(2, 2)).to.equal(4)
  })

  it('RESULT - Validasi parameter kalau bukan angka', function () {
    expect(MATH.perkalian('irsan', 2)).to.equal(`Parameter must be Number`)
  })
})

describe('TESTING - fungsi pembagian', function () {
  it('RESULT - Pertambahan 2 / 2 = 1', function () {
    expect(MATH.pembagian(2, 2)).to.equal(1)
  })

  it('RESULT - Validasi parameter kalau bukan angka', function () {
    expect(MATH.pembagian('irsan', 2)).to.equal(`Parameter must be Number`)
  })
})
