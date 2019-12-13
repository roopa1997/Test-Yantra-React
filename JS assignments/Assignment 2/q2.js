console.log("sum of array elements 1");

function addarray(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {

        sum = sum + a[i];

    }
    console.log(sum)
} addarray([10, 20, 30, 40])

console.log("sum of array elements 2");
var addarray = function (a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    console.log(sum)
} 
addarray([10, 20, 30, 40]);

console.log("sum of array elements 3");
(function (a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    console.log(sum)
}) ([10, 20, 30, 40]);

console.log("sum of array elements 4");
 var fun=(a)=> {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    console.log(sum)
} 
fun([10, 20, 30, 40])