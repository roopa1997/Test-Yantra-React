function add(a,b){
    var sum = a+b
    console.log("sum is : ", sum)
}
add(10,15)

function check(n){
    console.log("value of n is : ",n)
}
check();

function add(a,b){
    var sum = a+b
    console.log("sum is : ", sum)
}
add(10)

function test(){
    
    console.log("tested method")
}
test(100)

function multiply(n1,n2){
    return n1*n2
}
  var mul= multiply(10,20)
  console.log(mul)

  // anonymous functions
  
      var division = function(x,y){
          return x/y
      }
var d = division(25,5)
console.log("value is ",d);



(function(p,q){
    console.log("value is ",p-q);
})(20,10);

// arrow functions 

var addition = (a,b,c)=>{
    return a+b+c
}
var x=addition(2,3,5)
console.log("sum : "+x)

var addition = (a,b,c)=>a+b+c;
var x=addition(2,3,5)
console.log("sum : "+x)

var square=(a)=>a*a;
console.log(square(10))

var greet= ()=> console.log("good evening ladies and gentlemen")
greet();4