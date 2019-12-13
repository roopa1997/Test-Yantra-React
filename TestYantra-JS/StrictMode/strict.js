

/* declaration without using keywords is possible 
for this reason strict mode was introduced
at tob use, "use strict" */

//"use strict" global
const firstName = 'Bill'
const lastName = 'Gates'
console.log('first Name', firstName)
console.log('last Name', lastName)

function display() {
    console.log('this is ', this)
    console.log('display function')
}
display()

function showData() {

    "use strict"
    //this applies only to the  function
    // this is undefined in strict mode for functions
    //which is called like a normal function

    console.log('this is ', this)
    console.log('showData function')
    this.data = 'hello'
    //undefined.data='hello'
}
//showData()
new showData()
