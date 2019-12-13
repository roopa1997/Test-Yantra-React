// const john = {
//     name: 'john',
//     age: 25,
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal')
//             console.log(`Good ${timeOfDay}, this is ${this.name}`)
//         else
//             console.log(`Hey ${timeOfDay}, this is ${this.name}`)

//     }
// }
// console.log('======')
// using apply 


const john = {
    name: 'john',
    age: 25,
    presentation: function(style, ...arr) {
        if (arr[0] === 'formal')
            console.log(`Good ${arr[0]}, this is ${this.name}`)
        else
            console.log(`Hey ${arr[0]}, this is ${this.name}`)

    }
}
john.presentation('formal','Morning')
console.log('========================')

const babitha = {
    name: 'babitha',
    age: 23
}
john.presentation.call(babitha,'friendly','Evening')

const emily = {
    name : 'emily',
    age : 22
}
john.presentation.apply(emily,['formal','night'])

const vijay = {
    name : 'vijay',
    age : 50
}
// bind does not execute the function it vwill create a copy of it 
// and it will return it. 
// we can reuse the function whenever required with different parameters 

const bindFunction = john.presentation.bind(vijay,'friendly','afternoon')
bindFunction('Morning')
bindFunction('Evening')
bindFunction('Night')
