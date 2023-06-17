Describe Pizza()

Test: "It should retun a pizza object with topping and size options."
Code: suzPizza = new Pizza ("chicken", "large")
Expected Output: suzPizza;
                toppings: chicken;
                size: large;

Test: "It should allow for more than one pizza topping"
Code: suzPizza = new Pizza (["chicken, "artichoke", "garlic"], "large")
Expected Output: suzPizza;
                toppings: chicken, artichoke, garlic
                size: large;

Test: Create a pizza prototype method that will return a string show the customer their order.
Code: Pizza.prototype.pizzaOrder() 
  size + "pizza with" + toppings;
Expected Output: "Large pizza with chicken, artichoke, garlic"

