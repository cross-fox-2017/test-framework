const assert = require('assert');

// PERTAMBAHAN
function pertambahan (x, y) {
  if (typeof(x) == 'number' && typeof(y) =='number' )
    return x + y
  else
    return 'parameters required'
}

// assert.equal(pertambahan(2,2),4)
// assert.equal(pertambahan(2),'parameters required')

// PENGURANGAN
function pengurangan (x, y) {
  if (typeof(x) == 'number' && typeof(y) =='number' )
    return x - y
  else
    return 'parameters must be number'
}

// assert.equal(pengurangan(5,3),2)
// assert.equal(pengurangan(8,'3'),'parameters must be number')

// PERKALIAN
function perkalian (x, y) {
  if (typeof(x) == 'number' && typeof(y) =='number' )
    return x * y
  else
    return 'parameters required'
}

// assert.equal(perkalian(5,3),15)
// assert.equal(perkalian(8), 'parameters required')

// PEMBAGIAN
function pembagian (x, y) {
  if (typeof(x) == 'number' && typeof(y) =='number' )
    return x / y
  else
    return 'parameters must be number'
}

// assert.equal(pembagian(24,3),8)
// assert.equal(pembagian(27,'asdasd'),'parameters must be number')

// PANGKAT
function pangkat (x, y) {
  if (typeof(x) == 'number' && typeof(y) =='number' )
    return Math.pow(x, y)
  else
    return 'parameters must be number'
}

// assert.equal(pangkat(2,3),8)
// assert.equal(pembagian(27,'cs2c'),'parameters must be number')

// AKAR
function akar (y) {
  if (typeof(y) =='number' )
    return Math.sqrt(y)
  else
    return 'parameters must be number'
}

// assert.equal(akar(64), 8)
// assert.equal(akar('asdasdasd'), 'parameters must be number')

// RANDOM
function random (y,x) {
  if (typeof(x) == 'number' && typeof(y) =='number' )
    return Math.floor(Math.sqrt(((y+x)*3/2)-y))
    else
      return 'parameters required'
}

// assert.equal(random(60,40), 9)
// assert.equal(random(60), 'parameters required')
