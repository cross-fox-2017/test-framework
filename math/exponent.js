// const assert = require('assert');

var Exponent = {
    mathExponent: function(a, b) {
        if (typeof(a) == "number" && typeof(b) == "number") {
            return a / b
        } else {
            return "cek input parameter"
        }
    }
}

module.exports = Exponent

// assert.equal(Exponenet(2,1),2)
// assert.equal(Exponenet(2),false)
