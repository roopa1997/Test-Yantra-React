var fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi"];
for (var i = 0; i < fruits.length; i++) {
    console.log("fruits ", fruits[i]);
}
console.log("for of loop")
var fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi"];
for (var fruit of fruits) {
    console.log("fruits ", fruit)
}
console.log("for in loop")
var fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi"];
for (var index in fruits) {
    console.log("index is: ", index)
    console.log("fruit:s ", fruits[index])
}

console.log("for in loop for printing objects")
var person = {
    name: "Priyanka",
    college: "APS",
    bf: false
}
for (var key in person) {
    console.log("key is: ", key)
    console.log("value is: ", person[key])
}

console.log("foreach")
var fruits = ["Apple", "Orange", "Mango"]
fruits.forEach(function(fruit,index){
    console.log("index is : ",index)
    console.log("fruit is : ",fruit)

})
