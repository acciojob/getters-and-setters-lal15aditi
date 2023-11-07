//complete this code
class Person {
	constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(value) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.log("Age cannot be negative.");
        }
    }
}

class Student extends Person {
	study() {
        console.log(`${this.name} should study`);
    }
}

class Teacher extends Person {
	teach() {
        console.log(`${this.name} should teach`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
