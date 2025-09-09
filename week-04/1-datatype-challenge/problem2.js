// Problem 4
function removeDuplicate(arr) {
  return Array.from(new Set(arr));
}
// console.log(removeDuplicate([1, 2, 3, 3, 4, 1]));

let a = new Set();

a.add("ss");
a.add("ss");
a.delete("ss");
a.has("ss");
// a.size("ss")

// console.log(a)

// problem 5
// [0, 7, 11, 2], target = 9`

function returnIndex(arr, target) {
  let indexes = [];
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let needed = target - arr[i];

    for (let a = 0; a < arr.length; a++) {
      if (map.has(arr[needed])) {
        return (indexes = [i, map.get(needed)]);
      }
      map.set(arr[a], a);
      console.log(map, indexes);
    }
  }

  return indexes;
}

console.log(returnIndex([0, 7, 11, 2], 9));

// Problem 8

function findMissing(arr) {
  let actualSum = arr.reduce((a, b) => a + b);
  let endNumber = arr.length + 1;
  let expectedSum = (endNumber * (endNumber + 1)) / 2;
  return expectedSum - actualSum;
}

// console.log(findMissing([1, 2, 4, 5]));

// Problem 9

function findLongestWord(sentence) {
  let sentenceArray = sentence.split(" ");
  let longestWord = "";
  for (let word of sentenceArray) {
    if (longestWord.length < word.length) longestWord = word;
  }
  return longestWord;
}

console.log(findLongestWord("I love programming in JavaScript"));
