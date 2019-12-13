// Array Destructuring

const numbers = [100, 200, 300, 400]
let [num1, num2, num3, num4] = numbers
console.log('number:', num1)
console.log('number:', num2)
console.log('number:', num3)
console.log('number:', num4)

console.log("===========")
const items = [
    {
        name: "watch",
        brand: "titan",
        price: 2000
    },
    {
        name: "lipstick",
        brand: "lakme",
        price: 300
    },
    {
        name: "mobile",
        brand: "Mi",
        price: 8000
    }
]

const [item1,item2]=items

console.log("item1:",item1)
console.log("item1:",item2)
