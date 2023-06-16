




function Pizza(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize
}
Pizza.prototype.customerOrder = function () {
  return this.size + " pizza with " + this.toppings;
}




  //let customPizza = new Pizza (){
  //};
