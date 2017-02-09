var test = {

  pertambahan: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return x + y
    else
      return 'invalid parameters'
  },

  // PENGURANGAN
  pengurangan: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return x - y
    else
      return 'invalid parameters'
  },

  // PERKALIAN
  perkalian: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return x * y
    else
      return 'invalid parameters'
  },

  // PEMBAGIAN
  pembagian: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return x / y
    else
      return 'invalid parameters'
  },

  // PANGKAT
  pangkat: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return Math.pow(x, y)
    else
      return 'invalid parameters'
  },

  // AKAR
  akar: function(y) {
    if (typeof(y) == 'number')
      return Math.sqrt(y)
    else
      return 'invalid parameters'
  },

  // RANDOM
  random: function(y,x) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return Math.floor(Math.sqrt(((y+x)*3/2)-y))
      else
        return 'invalid parameters'
  }

}

module.exports = test
