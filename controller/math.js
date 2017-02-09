var Validate = require('./validate')

module.exports = {
  pertambahan: function (num_1, num_2) {
    return Validate.isnan(num_1, num_2) ? num_1 + num_2 : `Parameter must be Number`
  },
  perkurangan: function (num_1, num_2) {
    return Validate.isnan(num_1, num_2) ? num_1 - num_2 : `Parameter must be Number`
  },
  pembagian: function (num_1, num_2) {
    return Validate.isnan(num_1, num_2) ? num_1 / num_2 : `Parameter must be Number`
  },
  perkalian: function (num_1, num_2) {
    return Validate.isnan(num_1, num_2) ? num_1 * num_2 : `Parameter must be Number`
  }
}
