# 🧮 Map And Set Object – Practice Problem

---

### 1. Word Frequency Counter

- **Problem:** Given a sentence, count how many times each word appears.
  Input: `"hello world hello code"`  
  Output: `{ hello → 2, world → 1, code → 1 }`
- **Hint:** Use a Map with word as key, count as value.
- **Editorial:** Split string → loop → update counts.

---

### 2. Group Anagrams

- **Problem:** Given an array of strings, group anagrams together.
- **Input:** ["eat","tea","tan","ate","nat","bat"]
- **Output** [["eat","tea","ate"],["tan","nat"],["bat"]]
- **Hint:** Use a Map with sorted word as the key, push into an array as value.
- **Editorial:** `"eat"` → `"aet"`, `"tea"` → `"aet"` → same group.

---

## 3. First Non-Repeating Character in String

**Problem:** Find the first character in a string that does not repeat.

**Input / Output:**

- Input: `"swiss"` → Output: `"w"`

**Hint:** Use a `Map` to store counts of each character, then loop again to find first with count 1.

**Editorial:** `Map` preserves insertion order.

---

## 4. LRU (Least Recently Used) Cache Simulation

**Problem:**  
Implement a cache system with a given capacity using `Map`. When capacity is exceeded, remove the least recently used item.

**Example:**

```js
put(1, 1)
put(2, 2)
get(1) → 1
put(3, 3) // removes key 2
get(2) → -1

---
```
