// Controllers in JavaScript are mostly written in a similar fashion to the one below.
// Basically, they are closures inside an IIFE (Immediately Invoked Function Expression) returning an object which stores a function to give access to the inside scope.
// Closures are functions that are using a function that has already returned a value.

// Budget Controller
var budgetController = (
    function() {
    
        var Expense = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };

        var Income = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };


        var totalExpenses = 0;

        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0,
                inc: 0
            }
        };
    
    })();


// UI Controller
var UIController = (function() {
    // Some code later
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }

        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
})();





var controller = (function(budgetCtrl,UICtrl) {
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function() {
        // 1. Get input data
        var input = UICtrl.getinput();
        console.log(input);
        // 2. Add item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate budget

       // 5. Display budget on UI
    }
    return {
        init: function() {
            console.log('Application started.');
            setupEventListeners();
        }
    }
})(budgetController,UIController);


controller.init();