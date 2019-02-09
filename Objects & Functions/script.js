// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1994, 'waitress');



Person.prototype.calculateAge = 
function() {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

console.log(john.lastName);
jane.lastName;