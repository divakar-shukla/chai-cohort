// Problem 1

function wordRepeatCount(string) {
  let finalObject = {};
  let map = new Map();
  let stringArray = string.split("");
  stringArray.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });
  console.log(map);
  map.forEach((value, key) => (finalObject[`${key}`] = value));
  return finalObject;
}
// console.log(wordRepeatCount("hello world hello code"));

// Problem 2
function groupAnagram(arr) {
  let map = new Map();

  for (let word of arr) {
    let sortedWord = word.split("").sort().join("");

    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }

    map.get(sortedWord).push(word);
  }
  return Array.from(map.values());
}
// console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Problem 3

function findFirstUniqueChar(word) {
  const chars = word.split("");
  let fistUniChar = "";
  const myMap = new Map();
  for (let char of chars) {
    if (!myMap.has(char)) myMap.set(char, 0);
    myMap.set(char, myMap.get(char) + 1);
  }

  for (let [key, value] of myMap) {
    if (value == 1) return (fistUniChar = key);
  }
}

console.log(findFirstUniqueChar("swiss"));
