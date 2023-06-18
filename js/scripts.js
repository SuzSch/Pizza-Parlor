function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}







Pizza.prototype.cost = function () {
  const sizePrice = {
    small: 5.99,
    medium: 7.99,
    large: 9.99,
  };


}

//UI Logic:
window.onload = function () {
  document.getElementById("order").onclick = function (event) {
    event.preventDefault();
    const pizzaSize = document.querySelector("input[name=size]:checked").value

    const pizzaTopping = document.querySelectorAll('input[name="topping"]:checked');
    let checkedToppings = [];
    pizzaTopping.forEach((checkbox) => {
      checkedToppings.push(checkbox.value)
    });
  };
}
