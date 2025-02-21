// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
    // Initialize name, price, and stock properties
    this.name = name;
    this.price = price;
    this.stock = stock;
}
Product.prototype.applyDiscount = function(percent){
  this.price = Math.round(this.price - this.price*(percent/100));
}
Product.prototype.purchase = function(quantity){
  if(this.stock >= quantity){
   return this.stock = this.stock - quantity;
  }else{
    return "Not enough stock";
  }
}
// Define applyDiscount method on Product's prototype

// Define purchase method on Product's prototype

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { product, action } = JSON.parse(input);
  const storeItem = new Product(product.name, product.price, product.stock);

  if (action.type === "discount") {
    storeItem.applyDiscount(action.percent);
  } else if (action.type === "purchase") {
    process.stdout.write(JSON.stringify(storeItem.purchase(action.quantity)));
    return;
  }

  process.stdout.write(JSON.stringify([storeItem.price, storeItem.stock]));
});
