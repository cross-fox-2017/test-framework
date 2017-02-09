module.exports = function(a,b){
  if (a != null && b != null) {
    if ( isNaN(a) || isNaN(b) ) {
      return 'masukkkan number'
    }
    else {
      return a+b
    }
  }
  else {
    return 'masukkkan dua angka'
  }
}
