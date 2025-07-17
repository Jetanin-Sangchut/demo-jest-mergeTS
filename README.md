# Merge Function - TypeScript Project

This project implements a `merge` function in TypeScript that merges **three collection of integers** into a single ascending-sorted array. The project includes unit tests and does **not use any built-in sort function**.

collection_1 - Array sorted from max to min (descending)

collection_2 - Array sorted from min to max (ascending)

collection_3 - Array sorted from min to max (ascending)

returns new array containing all elements sorted in ascending order

---

## 📌 Notes
Merging logic uses three pointers and compares values step-by-step with no built-in sort is used.

---

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```
