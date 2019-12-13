const person = {
    name: "Yash",
    age: 38,
    color: "Pink",
    hobbies: ["Singing", "Acting", "Cricket"],
    address: {
        city: "Bangalore",
        pincode: "560068"
    },
    c:undefined,
    j:Math.max(10,20),
    x:function(){}
}

console.log("JS person object",person)
const jsonPerson=JSON.stringify(person)
console.log("JSON person object",jsonPerson)
const jsPerson=JSON.parse(jsonPerson)
console.log("JS person object",jsPerson)