const add = require('./add')
const substract = require('./substract')
const multiply = require('./multiply')
const root = require('./root')
const exponent = require('./exponent')
const divide = require('./divide')
const data = require('./data')

const math = {
  add,
  substract,
  multiply,
  divide,
  exponent,
  root
}

const run = {
  data
}

module.exports = {
  math,
  run
}
