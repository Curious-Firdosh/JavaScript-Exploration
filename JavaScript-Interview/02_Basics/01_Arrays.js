// Creating an array
const myarr5 = new Array("kala", 456, "kiHaalChhaaal");
console.log("Original Array: ", myarr2);

// Array Methods

// Push method (adds to the end)
myarr2.push("ShaktiMaaaan");
console.log("After push(): ", myarr2);

// Pop method (removes from the end)
myarr2.pop();
console.log("After pop(): ", myarr2);

// Shift method (removes from the start)
myarr2.shift();
console.log("After shift(): ", myarr2);

// Unshift method (adds to the start)
myarr2.unshift("890@@");
console.log("After unshift(): ", myarr2);

// Includes method (check if element is in the array)
console.log("Does the array include 'kala'? ", myarr2.includes("kala")); // true or false

// IndexOf method (finds the index of an element)
console.log("Index of 456: ", myarr2.indexOf(456)); // Returns the index, or -1 if not found

// Join method (joins all elements into a single string) hey it joins but also converted into strings 
const newArray = myarr2.join();
console.log("Array as a string using join(): ", newArray);

const A = [1, 2, 3, 4, 5];

// Using slice() (does not modify the original array)
const myarr1 = A.slice(1, 3); 
console.log(myarr1); // [2, 3]
console.log("Original Slice Array", A); // [1, 2, 3, 4, 5]

// Using splice() (modifies the original array)
const myarr2 = A.splice(1, 3); 
console.log(myarr2); // [2, 3, 4]
console.log("Original Splice Array", A); // [1, 5]
