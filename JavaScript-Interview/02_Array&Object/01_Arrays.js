// =======================================
// @Array Methods in JavaScript (with Explanation)
// =======================================

// * Creating an array using the `new Array()` constructor
const myarr5 = new Array("kala", 456, "kiHaalChhaaal");

// ! You mistakenly used 'myarr2' before declaring it.
// * Let's fix that by using 'myarr5' for demonstration.

console.log("Original Array: ", myarr5); // ? Output: [ 'kala', 456, 'kiHaalChhaaal' ]

// * push(): Adds element at the end
myarr5.push("ShaktiMaaaan");
console.log("After push(): ", myarr5);
// ? Output: [ 'kala', 456, 'kiHaalChhaaal', 'ShaktiMaaaan' ]

// ! pop(): Removes element from the end
myarr5.pop();
console.log("After pop(): ", myarr5);
// ? Output: [ 'kala', 456, 'kiHaalChhaaal' ]

// ! shift(): Removes element from the start
myarr5.shift();
console.log("After shift(): ", myarr5);
// ? Output: [ 456, 'kiHaalChhaaal' ]

// * unshift(): Adds element at the start
myarr5.unshift("890@@");
console.log("After unshift(): ", myarr5);
// ? Output: [ '890@@', 456, 'kiHaalChhaaal' ]

// ? includes(): Checks if a value exists
console.log("Does the array include 'kala'? ", myarr5.includes("kala"));
// ? Output: false (because we shifted "kala" out earlier)

// ? indexOf(): Finds index of an element
console.log("Index of 456: ", myarr5.indexOf(456));
// ? Output: 1 (index of 456 in the array)

// * join(): Combines array into a string (all elements become strings)
const newArray = myarr5.join();
console.log("Array as a string using join(): ", newArray);
// ? Output: "890@@,456,kiHaalChhaaal"

// =======================================
// slice() vs splice()
// =======================================



const A = [1, 2, 3, 4, 5];

// * slice(): copies part of the array without modifying the original
const myarr1 = A.slice(1, 3); // ? from index 1 to 2 (not 3)
console.log("Result from slice():", myarr1); // ? Output: [2, 3]
console.log("Original array after slice():", A); // ? Output: [1, 2, 3, 4, 5]

// ! splice(): removes elements (and can add too), modifies original
const myarr2 = A.splice(1, 3); // ! from index 1, remove 3 elements → [2, 3, 4]
console.log("Result from splice():", myarr2); // ? Output: [2, 3, 4]
console.log("Original array after splice():", A); // ? Output: [1, 5]

/*
 * 🧠 Summary:
 * * * push()      → add at end        ✅ modifies array
 * ! pop()       → remove from end   ✅ modifies array
 * ! shift()     → remove from start ✅ modifies array
 * * unshift()   → add at start      ✅ modifies array
 * ? includes()  → check presence    🔍 returns true/false
 * ? indexOf()   → find index        🔢 returns index or -1
 * * join()      → join into string  🔗 returns a string
 * * slice()     → extract part      🧪 does NOT modify original
 * ! splice()    → cut and return    ✂️ modifies original
 */