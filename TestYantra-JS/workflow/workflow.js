function first() {
    setTimeout(function () { console.log("first func"); }, 10000);

}
function second() {
    console.log("second func");
}
first();
second();

console.log("callback function")
function first(callback) {
    setTimeout(function () {
        console.log("first func")
        callback();
    }, 0);
}
function second() {
    console.log("second func");
}
first(second);

var fruits=["banana","apple","mango"]
var result=fruits.sort()
console.log(result)
 

var interval
function display(){
    interval= setInterval(date,2000)
}
function stop(){
    clearInterval(interval)
}
function date(){
    var d = new Date()
    console.log(d)
     stop()
    
}

display();


