console.log("factorial 1")
  function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));
console.log("factorial 2")
 var factorial= function (x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));

console.log("factorial 3");

var fun= function (x) 
{ 

  if (x === 0)
 {
    return 1;
 }
 console.log (x * factorial(x-1));
         
}(5);


console.log("factorial 4");

var fun=  (x)=> { 

  if (x === 0)
 {
    return 1;
 }
 return x * factorial(x-1)
         
}