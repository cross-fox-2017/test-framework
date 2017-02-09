var assert = require('assert')

module.exports = {
  equal: function (method, compare) {
    return assert.equal(method, compare)
  },

  nonEqual: function (method, compare) {
    return assert.notEqual(method, compare)
  },

  strictEqual: function (method, compare) {
    return assert.strictEqual(method, compare)
  },

  nonStrictEqual: function (method, compare) {
    return assert.notStrictEqual(method, compare)
  }

}
