var TEST = require('./controller/test')
var MATH = require('./controller/math')

// testing equal perkalian 2 x 2 = 4
TEST.equal(MATH.pertambahan(2, 2), 4)

// testing output error harus sama
TEST.equal(MATH.pertambahan(2, 'irsan'), `Parameter must be Number`)

// testing nonEqual pertambahan 1 + 1 = 2
TEST.nonEqual(MATH.pertambahan(1, 1), 3)
