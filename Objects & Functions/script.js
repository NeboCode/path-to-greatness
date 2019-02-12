// Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1994, 'waitress');



// Person.prototype.calculateAge = 
// function() {
//     console.log(2019 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// console.log(john.lastName);
// jane.lastName;

// Object.create


// var personProto = {
//     calculateAge: function() {
//         console.log(2019 - this.yearOfBirth);
//     }
// };
// var john = Object.create(personProto);

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'Teacher';


// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearOfBirth: {value: 1995},
//     job: {value: 'Online Tutor'}
// });


// Primites Vs Objects

// var a = 23;
// var b = a;
// a = 46;

// console.log(a);
// console.log(b);

// Now objects?



// var obj1 = {
//     name: 'Jaohn',
//     age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);


// var age = 27;
// var obj = {
//     name: 'Shone',
//     city: 'Whatever'
// };

// function change(a,b) {
//     a = 30;
//     b.city = 'Anything';
// };

// change(age,obj);

// console.log(age);
// console.log(obj.city);


// FUNCTIONS - Passing functions as arguments

// var years = [2007, 1991, 1994, 1995, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }


// function calculateAge(el) {
//     return 2019 - el;
// }
// function isFullAge(el) {
//     return el >= 18;
// }
// function maxHeartRate(el) {
//     if(el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
    
// }
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages,isFullAge);
// var maxHeart = arrayCalc(ages,maxHeartRate);

// console.log(maxHeart);

// Functions - FUNCTIONS RETURNING FUNCTIONS


// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ', what subject do you teach?');
//         }
//     }
//     else {
//         return function(name) {
//             console.log('Hello, '+ name +', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');


// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('Mark');
// designerQuestion('Claire');

// interviewQuestion('teacher')('Mark');



// Immediately Invoked Function Expressions (IIFE)

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
)();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);