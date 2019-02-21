// Controllers in JavaScript are mostly written in a similar fashion to the one below.
// Basically, they are closures inside an IIFE (Immediately Invoked Function Expression) returning an object which stores a function to give access to the inside scope.
// Closures are functions that are using a function that has already returned a value.


var budgetController = (
    function() {
        var x = 23;
        var add = function(a) {
            return x + a;
        }
        return {
            publicTest: function(b) {
                return add(b);
            }
        }
    }
)();

var UIController = (function() {
    // Some code later
}

)();


var controller = (function(budgetCtrl,UICtrl) {
    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublicMethod: function() {
            console.log(z);
        }
    }
})(budgetController,UIController);