function bagi(a,b){
  if(isNaN(a)&&isNaN(b)){
    return "isi parameternya"
  }
  if(isNaN(a)||isNaN(b)){
    return "parmeternya kurang 1"
  }
  else{
    return a/b
  }
}
module.exports=bagi
