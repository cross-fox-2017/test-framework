var pangkat = (angka, exponent=2) => {
  if (typeof(angka) == 'number' && typeof(exponent) == 'number'){
    return Math.pow(angka, exponent)
  } else {
    return 'Input is Required and must in Number'
  }
}

module.exports = pangkat
