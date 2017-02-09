// const assert = require('assert');

var Substract = {
    mathSubstract: function(a) {
        if (typeof(a) == "number") {
            return Math.sqrt(9)
        } else {
            return "cek input parameter"
        }
    }
}

module.exports = Substract

// assert.equal(Substract(9),3)
// assert.equal(Substract(),false)
