




  
console.log(factorial(5));

console.log("fibonacci 1")
var recursive = function(n) {
  if(n <= 2) {
      return 1;
  } else {
      return this.recursive(n - 1) + this.recursive(n - 2);
  }
}
recursive(5);
