function exponent(a){
  if(isNaN(a)){
    return "masukan number"
  }else{
    return Math.pow(a, 2)
  }
}

module.exports = exponent;
