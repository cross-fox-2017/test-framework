function pangkat(a,b){
  if(isNaN(a)&&isNaN(b)){
    return "isi parameternya"
  }
  if(isNaN(a)||isNaN(b)){
    return "parmeternya kurang 1"
  }
  else{
    return Math.pow(a,b)
  }
}
module.exports=pangkat
