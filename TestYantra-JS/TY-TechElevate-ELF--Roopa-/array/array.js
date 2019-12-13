console.log("Arrays");
var fruits = ["Apple","Mango","Orange","Butterfruit"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log("for loop");

for(var i=0;i<fruits.length; i++)
{
    console.log("fruits "+fruits[i]);
}

console.log("heterogenous array in js");

var person=["Anu", 40, true,null,undefined];
for(var i=0;i<person.length;i++){
    console.log("Person data  "+person[i]);
}
console.log("*********************************");

var num=10;
var str="10";
if(num!==str){
    console.log(" not equal");
}
else{
    console.log("equal");
}
console.log("*********************************");
var num=10;
var str="10";
if(num===str){
    console.log(" equal");
}
else{
    console.log(" not equal");
}
var num =10;
num= "hi";
console.log(num);

var p = new Object();{
    p.name="roopa";
    p.name="asha"
}
console.log(p.name);
