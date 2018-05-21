// Budget Controller
var budgetController = (function() {

  // Some code

})();





// UI Controller
var UIController = (function() {

  // Some code

})();



// Global APP Controller
var controller = (function(budgetCrtl, UICtrl){

  var ctrlAddItem = function() {

    // 1. Get the field input data

    // 2. Add the item to the budget controller

    // 3. Add the new item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

    console.log('Enter was entered');

  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);









