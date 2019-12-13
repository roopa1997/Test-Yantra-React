const person = {
    name: "Raj",
    age: 80,
    weight: 60,
    hobbies: ['Acting', 'Singing']
}
const { hobbies } = person;
console.log('Hobbies:', hobbies)


// can pass destructured object as parameter to function

function displayHobbies({ hobbies }) {
    for (let hobbie of hobbies) {
        console.log(hobbie.toUpperCase())
    }

} displayHobbies(person)


