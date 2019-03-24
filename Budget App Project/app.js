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

        var calculateTotal = function(type){
            var sum = 0;
            data.allItems[type].forEach(function(cur) {
                sum = sum + cur.value;
            });
            data.totals[type] = sum;
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
            },
            budget: 0,
            percentage: -1
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
            },
            calculateBudget: function() {
                    // calculate total income and expenses
                    calculateTotal('exp');
                    calculateTotal('inc');

                    // calculate the budget: income - expenses
                data.budget = data.totals.inc - data.totals.exp;

                    // calculate the percentage of income that we spent
                    if (data.totals.inc > 0) {
                        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                    } else {
                        data.percentage = -1;
                    }
                
                // 100 / 200 = 100 / 200 = 0.5 * 100
            },
            getBudget: function() {
                return {
                    budget: data.budget,
                    totalInc: data.totals.inc,
                    totalExp: data.totals.exp,
                    percentage: data.percentage
                }
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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
    };
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
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
        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
            
            if(obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        },
        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);  
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArr[0].focus();
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
    var updateBudget = function() {
        // 1. Calculate budget
                budgetCtrl.calculateBudget();              
        // 2. return budget
            var budget = budgetCtrl.getBudget();
       // 3. Display budget on UI
       UIController.displayBudget(budget);
    };
    var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get input data
        input = UICtrl.getinput();
        
        if(input.description !== "" && !isNaN(input.value) && (input.value > 0)) 
        {
        // 2. Add item to the budget controller

        newItem = budgetCtrl.addItem(input.type,input.description,input.value);

        // 3. Add the item to the UI
        console.log(newItem);
        UICtrl.addListItem(newItem, input.type);
        // 4. Clear the fields
        UICtrl.clearFields();

        // 5. Calculate and update budget
        updateBudget();
        } else {
            alert('Please enter a description and a value.');
        }

    }
    return {
        init: function() {
            console.log('Application started.');
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    }
})(budgetController,UIController);


controller.init();