console.log("-------push Method-----------")
var hobbies = ["watching", "runing", "maping", "doing"]
hobbies.push("Music")
console.log("After push ", hobbies)

console.log("-------pop Method-----------")
var rem = hobbies.pop();
console.log("After pop ", hobbies)
console.log("poped element ", rem)

console.log("-------shift Method-----------")
var removedEle = hobbies.shift("Dancing")
console.log("Removed Element ", removedEle)
console.log("Aftre shift ", hobbies)

console.log("-------unshift Method-----------")
var addedElement = hobbies.unshift("dancing")
console.log("length of array ", addedElement)
console.log("Aftre unshift ", hobbies)

console.log("-------join Method-----------")
var stringHobbies = hobbies.join("---")
console.log("string Hobbies ", stringHobbies)
console.log("Aftre join ", hobbies)

console.log("-------splice Method-----------")
var removedelements = hobbies.splice(1, 0, "Walking", "running")
console.log("Removed elements ", removedelements)
console.log("hobbies Aftre splice ", hobbies)

console.log("-------slice Method-----------")
var newremovedarryele = hobbies.slice(1, 2)
console.log("Removed elements ", newremovedarryele)
console.log("hobbies Aftre slice ", hobbies)


console.log("--------Filter Method----------")
var numbers = [100, 200, 300]
var numberNewArray = numbers.filter(function(num, index) {
    if (num > 100) {
        return true
    } else {
        return false
    }
})
console.log("filter Numbers = ", numberNewArray)

var filterUsingArrow = numbers.filter(num => num > 100)
console.log("filter using arrow = ", filterUsingArrow)

console.log("--------Map Method----------")
var mapArray = numbers.map(function(value, index) {
    var val = value + 50;
    return val
})
console.log("Mapped Numbers ", mapArray)

var mapUsingArrow = numbers.map(value => value + 50)
console.log("filter using arrow = ", mapUsingArrow)

var item = [{
        name: 'lipstic',
        id: 1,
        price: 499
    },
    {
        name: 'eyeliner',
        id: 2,
        price: 999
    },
    {
        name: 'watch',
        id: 3,
        price: 2000
    },
    {
        name: 'trimmer',
        id: 4,
        price: 500
    },
]

//var usingarrofun = item.filter(value => value.price > 500)
//console.log("filter using arrow = ",usingarrofun)

// var unsingMap = item.map(value => {
//     value.price = value.price + 100;
//     return item

// })

var mapItems = item.map(value => {

    var i = {
        name: value.name,
        id: value.id,
        price: value.price + 100
    }
    return i
})
console.log("after map  = ", mapItems)
console.log("Items= ", item)


console.log("--------includes Method----------")
var chocolets = ["dairy milk", "dark chocolets", "feraro"]
var hasKachha = chocolets.includes("kachccha mango bite")
console.log("Has kachccha ", hasKachha)

console.log("--------isArray----------")
var isArrayChoc = Array.isArray(chocolets)
console.log("Chocolets is array = " + isArrayChoc)