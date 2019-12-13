// class constructor and inheritance

class Person {
    constructor(fname, lname, age) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }
    getFullName() {
        return this.fname + '' + this.lname
    }
}
const person = new Person('Nazriya', 'Fahadh', 26)      
console.log('First name is ', person.fname)
console.log('Last name is ', person.lname)
console.log('Age name is ', person.age)
const fullName = person.getFullName()
console.log(fullName)

class Teacher extends Person {
    constructor(fname, lname, age, subjects) {
        super(fname, lname, age)
        this.subjects = subjects
    }
    getSubjects() {
        return this.subjects
    }
    static teachingStyle(){
        return 'boring teaching'
    }
}
const teacher = new Teacher('Rajeshwari', 'M', '26', ['Science', 'English'])
const teacherFullName = teacher.getFullName()
console.log('full anme is ', teacherFullName)
const subjects= teacher.getSubjects()
console.log('subjects ',subjects)
const style=Teacher.teachingStyle()
console.log('teaching style ',style)





