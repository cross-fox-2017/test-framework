var akar = (angka) => {
  if(angka < 1){
    return 'Must a Positive Number'
  } else if (typeof(angka) == 'number'){
    return Math.sqrt(angka)
  } else {
    return 'Input is Required and must in Number'
  }
}

module.exports = akar
