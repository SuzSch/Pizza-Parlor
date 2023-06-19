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

Test: "Creat a .cost method to specifiy the different cost for the different sizes.
Code: const sizePrice = 
      small: 5.99
      medium: 7.99
      large: 9.99
Expected Output: suzPizza.sizePrice;
                  9.99

Test: "Add extra cost for each topping"
Code: let toppingCost = Pizza toppings number * 1;
Expected Output: suzPizza.toppingCost;
                  3.00

Test: "Add the size cost and topping cost together and return the total.
Code: let totalCost = baseCost + toppingCost;
      return totalCost;
Expected Output: suzPizza.totalCost = 12.99

                  