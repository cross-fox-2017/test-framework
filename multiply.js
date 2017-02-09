// const assert = require('assert');

var Multiply = {
    mathMultiply: function(a, b) {
        if (typeof(a) == "number" && typeof(b) == "number") {
            return a * b
        } else {
            return "cek input parameter"
        }
    }
}

module.exports = Multiply

// assert.equal(Multiply(2,2),4)
// assert.equal(Multiply(2),false)
