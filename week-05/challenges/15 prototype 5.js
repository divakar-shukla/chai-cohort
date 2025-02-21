// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
    // Initialize items property
    this.price = []
}
ShoppingCart.prototype.addItem = function(items){
return this.price.push(items)
}
ShoppingCart.prototype.getTotalPrice = function(){
  return this.price.reduce((a,b)=> a + b, 0);
}

// Define addItem method on ShoppingCart's prototype

// Define getTotalPrice method on ShoppingCart's prototype

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { prices } = JSON.parse(input);
  const cart = new ShoppingCart();

  for (let price of prices) {
    cart.addItem(price);
  }

  process.stdout.write(JSON.stringify(cart.getTotalPrice()));
});
