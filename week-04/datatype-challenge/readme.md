### 1. Reverse a String
- **Problem:** Given a string, reverse it without using `.reverse()` in JavaScript.
- **Example:** `"hello"` → `"olleh"`
- **Hint:** Use a loop and build a new string from the end.
- **Editorial:** Iterate from last index to first, append each character to a new string.

---

### 2. Find Maximum Number in an Array
- **Problem:** Given an array of numbers, return the largest number.
- **Example:** `[10, 25, 3, 99, 45]` → `99`
- **Hint:** Use a loop and track the maximum value.
- **Editorial:** Initialize `max = arr[0]`, then compare each element.

---

### 3. Count Vowels in a String
- **Problem:** Count how many vowels (`a, e, i, o, u`) are present in a string.
- **Example:** `"javascript"` → `3`
- **Hint:** Convert string to lowercase, check each character.
- **Editorial:** Loop through string, increment count if character is a vowel.

---

## 🟡 Medium Problems (Arrays & Logic)

### 4. Remove Duplicates from an Array
- **Problem:** Given an array, remove duplicates and return unique values.
- **Example:** `[1, 2, 2, 3, 4, 4]` → `[1, 2, 3, 4]`
- **Hint:** Use a `Set` or loop with a new array.
- **Editorial:** `new Set(arr)` removes duplicates directly.

---

### 5. Two Sum Problem
- **Problem:** Given an array of numbers and a target, return indices of two numbers that add up to target.
- **Example:** `[2, 7, 11, 15], target = 9` → `[0, 1]`
- **Hint:** Use a map/dictionary to store visited numbers.
- **Editorial:** While iterating, check if `(target - currentNumber)` exists in the map.

---

### 6. Palindrome Checker
- **Problem:** Check if a string is a palindrome (reads same forward & backward).
- **Example:** `"madam"` → `true`, `"hello"` → `false`
- **Hint:** Compare first and last characters, move inward.
- **Editorial:** Reverse the string and compare with original.

---

## 🔴 Harder (But Useful for MERN & Interviews)

### 7. Anagram Checker
- **Problem:** Check if two strings are anagrams (same characters in any order).
- **Example:** `"listen"` & `"silent"` → `true`
- **Hint:** Sort both strings or use frequency maps.
- **Editorial:** Convert both strings to arrays, sort, and compare.

---

### 8. Find Missing Number
- **Problem:** Given an array of numbers from `1 to N` with one missing, find the missing number.
- **Example:** `[1, 2, 4, 5]` → `3`
- **Hint:** Formula for sum of first N numbers = `N*(N+1)/2`
- **Editorial:** Find expected sum - actual sum.

---

### 9. Longest Word in a Sentence
- **Problem:** Given a sentence, return the longest word.
- **Example:** `"I love programming in JavaScript"` → `"programming"`
- **Hint:** Split by spaces, compare lengths.
- **Editorial:** Use `.split(" ")`, track longest word.

---