///////////////////////////////////////////////////
// Function constructor
///////////////////////////////////////////////////

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


///////////////////////////////////////////////////
// Object.create
///////////////////////////////////////////////////

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

///////////////////////////////////////////////////
// Primites Vs Objects
///////////////////////////////////////////////////

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

///////////////////////////////////////////////////
// FUNCTIONS - Passing functions as arguments
///////////////////////////////////////////////////


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



///////////////////////////////////////////////////
// Functions - FUNCTIONS RETURNING FUNCTIONS
///////////////////////////////////////////////////

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


///////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
///////////////////////////////////////////////////


// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// )();

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);



///////////////////////////////////////////////////
// Closures (important)
// Definition: An inner function has always access to
// the variables and parameteres of its outer function
// even after the outer function has returned.
///////////////////////////////////////////////////

// function retirement(retirementAge) {
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         var a = ' years left until retirement.';
//         console.log((retirementAge - age) + a);

//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);

// var retirementIceland = retirement(67);
// retirementGermany(1990);
// retirementIceland(1990);
// retirementUS(1990);


// retirement(66)(1990);

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         }  else if (job === 'teacher') {
//             console.log('What subject do you teach? ' + name);
//         } else {
//             console.log('Hello ' + name + ', what do you do?');

//         }
//     }
// }

// interviewQuestion('teacher')('John');
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


///////////////////////////////////////////////////
// Bind, Call and Apply
///////////////////////////////////////////////////


// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style,timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I am ' + this.age + ' years old');
//         } else if (style === 'friendly') {
//             console.log('Hey, whats up? I am '+ this.name + ', I\'m a ' + this.job + ' and I am ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal','morning');


// john.presentation.call(emily, 'friendly', 'afternoon');

// Call Method lets us define what 'this' should refer to, in this case, we instead of this have emily.
// Apply method is the same, except it accepts arguments as an array.


// john.presentation.apply(emily, ['friendly', 'afternoon']);


// Bind method allows us to allow this explicitly, same as Call / Apply. Difference is, however, that Bind creates a copy of the function.


// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');

// emilyFormal('baguette');






// Example on previous lesson

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
// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);

// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan);


////////////////////////////////////////////////////////////
// My solution to the coding challenge 7
////////////////////////////////////////////////////////////


// var questions = [];

// var Question = function Question(quest,choices,answer) {

//     var question = {
//         question: quest,
//         options: choices,
//         answer: answer
//     };

//     questions.push(question);
// }

// Question('Do you like pizza?', ['Yes', 'No'], 0);
// Question('Is Shone amazing?', ['Yes', 'No'], 0);
// Question('Do you like pasta?', ['Yes', 'No'], 1);
// Question('Is Shone awesome?', ['Yes', 'No'], 0);


// var randomQuestion = Math.floor(Math.random()*questions.length);
// console.log(questions[randomQuestion].question);
// console.log('1. ' + questions[randomQuestion].options[0]);
// console.log('2. ' + questions[randomQuestion].options[1]);

//     var answered = prompt('Please type the answer:');
//     if (questions[randomQuestion].answer !== answered - 1) {
//         console.log('Wrong!');
//     } else if (questions[randomQuestion].answer === answered - 1) {
//         console.log('Correct!');
//     }



// Lecturer's solution to the coding challenge.

// (function() {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }
//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);
//         for (var i=0; i < this.answers.length; i++) {
//             console.log(i + '. ' + this.answers[i]);
//         }
//     }
    
//     Question.prototype.checkAnswer = function (ans) {
//         if (ans === this.correct) {
//             console.log('Correct answer!');
//         } else {
//             console.log('Wrong answer!');
//         }
//     }
    
//     var q1 = new Question('Is JavaScript the coolest programming language in the world?',['Yes','No'],0);
    
//     var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Someone'],1);
    
//     var q3 = new Question('What does best describe coding?', ['Boring','Hard','Fun','Tedious'],2);
    
//     var questions = [q1, q2, q3];
    
//     var n = Math.floor(Math.random() * questions.length);
    
//     questions[n].displayQuestion();
    
    
//     var answer = parseInt(prompt('Please select the correct answer'));
    
//     questions[n].checkAnswer(answer);
    
    
    
    
    
// })();




/* New lines, expert level */

(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i=0; i < this.answers.length; i++) {
            console.log(i + '. ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer!');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('---------------------------------------');
    }
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',['Yes','No'],0);
    
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Someone'],1);
    
    var q3 = new Question('What does best describe coding?', ['Boring','Hard','Fun','Tedious'],2);
    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    
    function nextQuestion() {

    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    
    var answer = prompt('Please select the correct answer');
    
    
    if (answer !== 'exit') {
        questions[n].checkAnswer(parseInt(answer), keepScore);
         nextQuestion(); }  
}
    
    
  nextQuestion();  
})();