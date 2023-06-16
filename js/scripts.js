




function Pizza(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize
}
Pizza.prototype.pizzaOrder = function () {
  return this.size + " pizza with " + this.toppings;
}




  //let customPizza = new Pizza (){
  //};
