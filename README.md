# [Pizza Parlor]()

### By Suzanne Schuber

### Choose your pizza size and toppings, then click the order button to see your order and the total.

## Technologies Used

* HTML
* CSS
* JavaScript

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level on the directory.
* Open index.html in your browser.
* Choose your size and toppings.
* Click on the order button to see your order and your total.

## TDD

Describe Pizza()

Test: "It should return a pizza object with topping and size options."
Code: suzPizza = new Pizza ("chicken", "large")
Expected Output: suzPizza;
                toppings: chicken;
                size: large;

Test: "It should allow for more than one pizza topping"
Code: suzPizza = new Pizza (["chicken, "artichoke", "garlic"], "large")
Expected Output: suzPizza;
                toppings: chicken, artichoke, garlic
                size: large;

Test: "Create a .cost method to specify the different cost for the different sizes.
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
Expected Output: suzPizza.cost = 12.99

## Known Bugs

* The UI logic in JS is not completed yet so the order will not display.

## License

MIT License

Copyright (c) 2023 Suzanne Schuber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

       