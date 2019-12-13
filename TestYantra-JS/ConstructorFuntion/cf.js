function Employee(name, age) {
    this.ename = name
    this.eage = age
    this.walk = function () {
        console.log('walk function executed')
    }
    this.getname = function () {
        return this.ename
    }


this.getname = function () {
    // // this is equal to employee object
    // this.console.log('this is employee object', this)
    function greet() {
    //this is window object as it is invoked by window object

        console.log('this is window object', this)
     }
    // arrow functions
    getData = () => {
        // this is the parent context i.e employee object

        this.console.log('this is the employee object', this)
        this.console.log('get data function')
    }
    greet()
    getData()
    }
}

// if new is not used , this points to the window object !!!!!!
const mark = Employee("Mark Zukerberg", 35);
console.log('name is: ', this.ename)
console.log('age is ', this.eage)
this.walk()
let name = this.getname()
console.log(name)
