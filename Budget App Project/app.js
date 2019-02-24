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
        return {
            addItem: function(type, des, val) {
                var newItem, ID;
                ID = 0;

                // ID = lastID + 1
                // Create new ID
                if (data.allItems[type].length > 0) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                } else {
                    ID = 0;
                }
                

                // Create new item based on 'inc' or 'exp' type
                if (type === 'exp') {
                    newItem = new Expense(ID, des, val);
                } else if (type === 'inc')
             {
                newItem = new Income(ID, des, val);
             }  
             // Push into our data structure
             data.allItems[type].push(newItem);

             // Return new element
             return newItem;
            },
            testing: function() {
                console.log(data);
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }

        },

        addListItem: function(obj, type) {
            // Create HTML string with placeholder text
            var html, newHtml, element;
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
            html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }

        else if (type==='exp') {
            element = DOMstrings.expensesContainer;
            html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%',obj.ID);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);

            // Insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
        var input, newItem;
        // 1. Get input data
        input = UICtrl.getinput();
        
        // 2. Add item to the budget controller

    newItem = budgetCtrl.addItem(input.type,input.description,input.value);

        // 3. Add the item to the UI
        console.log(newItem);
        UICtrl.addListItem(newItem, input.type);
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