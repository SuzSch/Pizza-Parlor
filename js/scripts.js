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
  let totalCost = baseCost + toppingCost;
  return totalCost;
};















//UI Logic:
window.onload = function () {
  document.getElementById("order").onclick = function (event) {
    event.preventDefault();
    let pizzaSize = document.querySelector("input[name=size]:checked").value

    let pizzaTopping = document.querySelectorAll('input[name="topping"]:checked');
    let checkedToppings = [];
    pizzaTopping.forEach((checkbox) => {
      checkedToppings.push(checkbox.value)
    });
    customOrder.innertext = "You have ordered a" + pizzaSize + "with" + checkedToppings
  };
}
