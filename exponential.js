let exponent = function( a, b) {
if(a<1){
  return "a shoubd be greater than or equals 1"
}
if(b>10){
  return "b should br less than or eqauls to 10"
}
{
   if (b === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, b-1);
  }
}
}
console.log(exponent(2, 4));