// set key:value

localStorage.setItem('role','admin')
localStorage.setItem('email','abc@gmail.com')
const email = localStorage.getItem('email')
console.log("email id",email)
console.log("set the key value")

// remove item

localStorage.removeItem('role')
console.log("remove by using key")

// while logout we clear localstorge

localStorage.clear()
console.log("local storage cleared")


//factorial of a number
  function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
} 
console.log(factorial(5))

