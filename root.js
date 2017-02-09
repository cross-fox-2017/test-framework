// const assert = require('assert');

var Root = {
    mathRoot: function(a, b) {
        if (typeof(a) == "number" && typeof(b) == "number") {
            return Math.pow(a, b)
        } else {
            return "cek input parameter"
        }
    }
}

module.exports = Root

// assert.equal(Root(5,5),3125)
// assert.equal(Root(2),false)
