// var keyword
// global scope variable
var a=10
var a=20
function check(){
    //local scope variable
    var b=20
    console.log("b value is "+ b)
}
check()

for(var i=0;i<5;i++){

}
console.log("value of i is ",i)

// let keyword
// No redeclaration
let x=10
//let x=20
console.log("first value",x)

// can re-assign the value 
x=30
console.log("second value",x)

//hoisting is not there when let keyword is useds
// console.log("th value of c is ",c)
// let c=10;

// we do have functional scope by using let keyword
function test(){
    let y=10;
    console.log(y)
}
test()
// we do have block level scope also by using let keyword
for(let j=0;j<6;j++){
    console.log(j)

}
//const keyword
//we cannot re-declare and re-initialize
// const a=10
// const a=20
// console.log(a)
// block level scope is also achieved
// for(const j=0;j<6;j++){
    
// }console.log(j)
// cannot only declare
// const z;
// console.log(z)

const items=["watch","shoe","chocolates","mobiles"]
console.log(items)
items.push("laptops")
console.log(items)
//items=[]

const person={
    name: "........"
}
console.log(person.name)

person.name="alia bhat"
console.log(person.name)