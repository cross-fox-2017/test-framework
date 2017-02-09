module.exports = function(num){
  if (num != null) {
    if ( isNaN(num) ) {
      return 'masukkkan number'
    }
    else {
      return Math.pow(num,2)
    }
  }
  else {
    return 'masukkkan hanya satu angka'
  }
}
