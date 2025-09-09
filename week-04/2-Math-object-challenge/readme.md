# 🧮 JavaScript Math Object – Practice Problems

This file contains practice problems for mastering JavaScript `Math` object methods like `round()`, `min()`, `max()`, `ceil()`, `floor()`, and `pow()`.

---

## 🟢 Easy Problems

### 1. Round Off Grades

- **Problem:** Round students’ marks to the nearest integer.  
  Input: `marks = [87.4, 92.8, 76.5]`  
  Output: `[87, 93, 77]`
- **Hint:** Use `Math.round()` in a loop.
- **Editorial:** Apply `Math.round(num)` on each mark.

---

### 2. Find the Smallest and Largest Number

- **Problem:** Given an array, find the smallest and largest number.  
  Input: `[23, 11, 56, 78, 3, 45]`  
  Output: `min = 3, max = 78`
- **Hint:** Use `Math.min(...arr)` and `Math.max(...arr)`.
- **Editorial:** Spread operator (`...`) passes array values as arguments.

---

### 3. Ceiling and Floor of Division

- **Problem:** Given two numbers `a` and `b`, print the ceiling and floor of `a / b`.  
  Input: `a = 10, b = 3`  
  Output: `ceil = 4, floor = 3`
- **Hint:** Use `Math.ceil()` and `Math.floor()`.
- **Editorial:** `10 / 3 = 3.33` → ceil(3.33) = 4, floor(3.33) = 3.

---

## 🟡 Medium Problems

### 4. Power of a Number

- **Problem:** Write a function `power(base, exp)` that returns base^exp.  
  Input: `(2, 5)` → Output: `32`
- **Hint:** Use `Math.pow(base, exp)` or `**`.
- **Editorial:** `Math.pow(2, 5)` = `32`.

---

### 5. Dice Simulator

- **Problem:** Simulate rolling a dice (1 to 6).
- **Hint:** Use `Math.random()` → 0 to 1, scale with `* 6`, then `Math.floor()` + 1.
- **Editorial:** `Math.floor(Math.random() * 6) + 1`.

---

### 6. Find Closest Integer

- **Problem:** Given a floating-point number, return the closest integer.  
  Input: `4.3` → `4`  
  Input: `7.6` → `8`
- **Hint:** Use `Math.round()`.
- **Editorial:** `Math.round(num)` gives nearest integer.

---

## 🔴 Hard Problems

### 7. Round Currency

- **Problem:** Show product prices rounded to 2 decimal places.  
  Input: `99.5678` → Output: `99.57`
- **Hint:** Multiply by 100 → round → divide by 100.
- **Editorial:** `Math.round(num * 100) / 100`.

---

### 8. Power of Two Checker

- **Problem:** Check if a number is a power of 2.  
  Input: `16` → `true`  
  Input: `20` → `false`
- **Hint:** Use `Math.log2(n)` and check if result is an integer.
- **Editorial:** `Math.log2(16) = 4` → integer → power of 2.

---

### 9. Range Random Number Generator

- **Problem:** Write a function `randomInRange(min, max)` that returns a random integer between min and max (inclusive).  
  Input: `(5, 10)` → Output: any number from `5` to `10`.
- **Hint:** `(Math.floor(Math.random() * (max - min + 1)) + min)`.
- **Editorial:** Use formula with `Math.random()` and `Math.floor()`.

---

**Each file is a set of three problem**

---
