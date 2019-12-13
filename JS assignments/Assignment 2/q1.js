console.log("ciircumference 1")
function circum(r) {
    var rad = r
    var res = 2 * Math.PI * r;
    console.log(res)
} circum(1)

console.log("ciircumference 2")
var c = function (r) {
    var rad = r
    var res = 2 * Math.PI * r;
    console.log(res)
}
c(2);

console.log("ciircumference 3");
(function (r) {

    var res = 2 * Math.PI * r;
    console.log(res)
})(3)

console.log("ciircumference 4")
var fun = (c) => {

    var res = 2 * Math.PI * c;
    console.log(res)
}
fun(3);