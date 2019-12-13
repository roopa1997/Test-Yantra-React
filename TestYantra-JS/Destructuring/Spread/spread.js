const numbers = [100, 200, 300]
console.log('Numbers', numbers)

const copyOfNumbers = [...numbers]
console.log('copy of numbers', copyOfNumbers)

numbers.push(500);
console.log('After push copy of numbers', numbers)
console.log('after push copyofnumbers', copyOfNumbers)

const animals = ['lion', 'tiger', 'cow', 'dog']
const moreAnimals = ['giraffe', 'camel', 'puma', 'humans']

const copyOfAnimals = [...animals, ...moreAnimals]

console.log('copy of animals', copyOfAnimals)

// spread operator with object

const person = {
    name: "Sundara",
    age: 23,
    height: 5.7,
    weight: 60
}

const copyOfPerson = { ...person }
person.name = "sundari"
console.log('person object', person)
console.log('copy of person object', copyOfPerson)


console.log("=====================")
const teacher = {
    name: 'Reena',
    age: 30,
    color: 'Pink',
    subjects: ['Social', 'English']
}

const address={
    city: 'Bengaluru',
    pincode: 560068,
    landmark: 'BTM'
}

const teacherwithAddress={...teacher, ...address}
console.log('Teacher with address:',teacherwithAddress)


const teacherWithPhoneno ={
    ...teacher,
    phoneno: 9878987898,
    married:false,
    getName: function(){
        return this.name
    }
}
console.log('Teacher With Phone Number',teacherWithPhoneno)