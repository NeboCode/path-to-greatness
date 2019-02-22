// Controllers in JavaScript are mostly written in a similar fashion to the one below.
// Basically, they are closures inside an IIFE (Immediately Invoked Function Expression) returning an object which stores a function to give access to the inside scope.
// Closures are functions that are using a function that has already returned a value.

// Budget Controller
var budgetController = (
    function() {
    
    
    })();




// UI Controller
var UIController = (function() {
    // Some code later
})();




var controller = (function(budgetCtrl,UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get input data

        // 2. Add item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate budget

       // 5. Display budget on UI
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController,UIController);