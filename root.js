module.exports = function(num){
  if (num != null) {
    if ( isNaN(num) ) {
      return 'masukkkan number'
    }
    else {
      return Math.sqrt(num)
    }
  }
  else {
    return 'masukkkan hanya satu angka'
  }
}
