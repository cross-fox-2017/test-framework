// const assert = require('assert');

var Divide = {
    mathDivide: function(a, b) {
        if (typeof(a) == "number" && typeof(b) == "number") {
            return a - b
        } else {
            return "cek input parameter"
        }
    }
}

module.exports = Divide

// assert.equal(Divide(1,1),0)
// assert.equal(Divide(2),false)
