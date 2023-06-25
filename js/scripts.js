function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function () {
  const sizePrices = {
    small: 5.99,
    medium: 7.99,
    large: 9.99,
  }
  let basePrice = sizePrices[this.size];
  let toppingCost = this.toppings.length * 1;
  let totalCost = basePrice + toppingCost;
  return totalCost;
};


window.onload = function () {
  document.getElementById("order").onclick = function (event) {
    event.preventDefault();

    let pizzaSize = document.querySelector("input[name=size]:checked").value
    let pizzaTopping = document.querySelectorAll('input[name="topping"]:checked');
    let checkedToppings = [];
    pizzaTopping.forEach((checkbox) => {
      checkedToppings.push(checkbox.value)
    });

    let pizza = new Pizza(checkedToppings, pizzaSize);
    let pizzaCost = pizza.cost();
    let customOrder = document.getElementById("custom-order");
    customOrder.innerText = "You have ordered a " + pizzaSize + " pizza with " + checkedToppings.join(", ") + ". The total cost is $" + pizzaCost;
    document.getElementById("pizza-form").reset();
  };
}
