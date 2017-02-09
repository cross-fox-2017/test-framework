// const assert = require('assert');

var Add = {
    mathAdd: function(a, b) {
        if (typeof(a) == "number" && typeof(b) == "number") {
            return a + b
        } else {
            return "cek input parameter"
        }
    }
}

module.exports = Add

// assert.equal(Add(1,1),2)
// assert.equal(Add(2),false)
