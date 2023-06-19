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
                  