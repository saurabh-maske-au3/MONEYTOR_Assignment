//1 <= n <= 1000000
let fibo = function (n) 
{
  if (n==0 || n>1000000) 
  {
    return "n value shoud be greater than zero  and less than equals 1000000"
    
  } 
  else if(n==1){
    return [0, 1];
  }
  else 
  {
    let s = fibo(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibo(4));
 