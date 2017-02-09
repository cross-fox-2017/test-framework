var mathMethod = {
  isNum: function (input) {
    return (typeof (input) == 'number') ? true : false
  },
  /* pertambahan */
  pertambahan: function (a, b) {
    return (mathMethod.isNum(a) && mathMethod.isNum(b)) ? a + b : 'input must number not string or empty'
  },
  /* pengurangan */
  pengurangan: function (a, b) {
    return (mathMethod.isNum(a) && mathMethod.isNum(b)) ? ( (a < b) ? 'a must be high then b' : a - b ) : 'input must number not string or empty'
  },
  /* perkalian */
  perkalian: function (a, b) {
    return (mathMethod.isNum(a) && mathMethod.isNum(b)) ? a * b : 'input must number not string or empty'
  },
  /* pembagian */
  pembagian: function (a, b) {
    return (mathMethod.isNum(a) && mathMethod.isNum(b)) ? ( (a < b) ? 'a must be high then b' : a / b ) : 'input must number not string or empty'
  },
  /* pangkat */
  pangkat: function (a, b) {
    if (mathMethod.isNum(a) && mathMethod.isNum(b)) {
      // number | true
      return Math.pow(a, b)
    }else {
      // string | false
      return 'input must number not string or empty'
    }
  },
  /* akar */
  akar: function (a) {
    if (mathMethod.isNum(a)) {
      // number | true
      return Math.sqrt(a)
    }else {
      // string | false
      return 'input must number not string or empty'
    }
  }
}

module.exports = mathMethod
