// Problem 1
function round(arr) {
  let roundedarr = arr.map((Element) => Math.round(Element));
  return roundedarr;
}

console.log(round([87.4, 92.8, 76.5]));

// Problem 2
function smallAndLarge(arr) {
  return { max: Math.max(...arr), min: Math.min(...arr) };
}

console.log(smallAndLarge([23, 11, 56, 78, 3, 45]));

// Problem 5

function diceSemulate() {
  return Math.ceil(Math.random() * 6);
}
console.log(diceSemulate());

// Problem 9
function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomMinMax(6, 9));
