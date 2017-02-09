function akar(a,b){
  if(isNaN(a)&&isNaN(b)){
    return "isi parameternya"
  }
  if(isNaN(a)||isNaN(b)){
    return "parmeternya kurang 1"
  }
  else{
    return Math.sqrt(a,b)
  }
}
module.exports= akar
