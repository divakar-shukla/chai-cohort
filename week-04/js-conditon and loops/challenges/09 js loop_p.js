function shinyDiamondRug(n) {
    let diamaond = ""
    for(let i = 0; i<=n; i++){
      for(let a = 0; a<n-i; a++){
        diamaond += " "
      }
      for(let b = 0; b<(2*i-1); b++){
        diamaond += "*";
      }
      diamaond += "\n"
    }
  
    for(let c = n-1; c >= 1; c--){
      for(let d = 1; d <= n-c; d++){
        diamaond += " ";
      }
      for(let e = 1; e <= (2 * c -1); e++){
        diamaond += "*"; 
      }
      diamaond += "\n";
    }
    return diamaond
  }
  
  // You just need to implement the shinyDiamondRug function
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const n = parseInt(input.trim(), 10);  // Get the number input
    const result = shinyDiamondRug(n);  // Call our function
    process.stdout.write(result);  // Output the result
  });
  