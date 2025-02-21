// You need to implement the Library constructor function and its prototype methods

function Library() {
    // Initialize books property
    this.lib = [];

}
Library.prototype.addBook = function (book){
  this.lib.push(book);
}
Library.prototype.findBook =  function(title){
  if(this.lib.includes(title)){
    return "Book found"
  }else{
    return "Book not found"
  }
}
// Define addBook method on Library's prototype

// Define findBook method on Library's prototype

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { books, searchTitle } = JSON.parse(input);
  const library = new Library();

  books.forEach(book => library.addBook(book));

  process.stdout.write(JSON.stringify(library.findBook(searchTitle)));
});
