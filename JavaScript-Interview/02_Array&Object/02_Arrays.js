// ===============================
//@ Array Operations in JavaScript
// ===============================

// * Marvel and DC arrays
const Marvel = ["Thor", "IronMan", "Captain", "DeadPool"];
const DcHeroes = ["AquaMan", "SuperMan", "Batman"];

// -------------------------------------------
// @1️⃣ What if we push one array into another?
// -------------------------------------------

// ! push() modifies the original array and adds the second array as a single element
Marvel.push(DcHeroes); 
console.log("1️⃣ Marvel after push:", Marvel);
/*
? Output:
? [
?   'Thor',
?   'IronMan',
?   'Captain',
?   'DeadPool',
?   [ 'AquaMan', 'SuperMan', 'Batman' ]
? ]
*/

console.log("1️⃣ Access SuperMan from pushed array:", Marvel[4][1]); // ? Output: SuperMan

// * WHY?
// * `push()` adds the entire DcHeroes array as a single element at the end of Marvel.
// * HOW TO ACCESS NESTED ELEMENT? -> Marvel[4][1] → 4th index (DcHeroes array), then 1st element ("SuperMan")


// -------------------------------------------
// 2️⃣ concat(): Merge two arrays into a new one
// -------------------------------------------

// * concat() does not change Marvel or DcHeroes; it returns a brand new array
const secretWar = Marvel.concat(DcHeroes);
console.log("2️⃣ secretWar (new merged array):", secretWar);
/*
? Output:
? [
?   'Thor',
?   'IronMan',
?   'Captain',
?   'DeadPool',
?   [ 'AquaMan', 'SuperMan', 'Batman' ],
?   'AquaMan',
?   'SuperMan',
?   'Batman'
? ]
*/

// * WHY?
// * `concat()` merges two arrays and returns a new one.
// ! It does not modify the original arrays.


// -------------------------------------------
// @3️⃣ Spread Operator: Combine arrays cleanly
// -------------------------------------------

// * The spread operator is generally preferred for merging multiple arrays
const all_heroes = [...DcHeroes, ...Marvel];
console.log("3️⃣ all_heroes using spread:", all_heroes);
/*
? Output:
? [
?   'AquaMan',
?   'SuperMan',
?   'Batman',
?   'Thor',

? ]
*/

// * WHY?
// * The spread operator (`...`) spreads elements of each array individually into a new array.


// -------------------------------------------
// 4️⃣ flat(): Flatten nested arrays
// -------------------------------------------

const anotherArray = [
  123,
  [2364],
  2,
  4,
  7,
  8,
  [1, 2, 3, 4, [4567, 890, "Firosh", [Marvel]]],
  [all_heroes]
];

// ! Infinity ensures all levels of nesting are removed
const flatArray = anotherArray.flat(Infinity); 
console.log("4️⃣ Flattened Array:", flatArray);

// * WHY?
// * `flat()` is used to remove nesting from arrays.
// * HOW? By using `.flat(Infinity)`, it goes deep into all levels.


// -------------------------------------------
// 5️⃣ Array Utility Methods
// -------------------------------------------

// ? isArray(): checks if the given value is an array
console.log("5️⃣ isArray('HELLLLLLLLLLLO'):", Array.isArray("HELLLLLLLLLLLO")); 

// * from(): converts iterable or string into an array
console.log("5️⃣ Array.from('HELLLLLLLLLLLLO'):", Array.from("HELLLLLLLLLLLLO"));

// * of(): creates a new array from given values
let a = 23;
let b = 56;
let c = 90;

console.log("5️⃣ Array.of(a, b, c):", Array.of(a, b, c)); 


/*
=======================
🧠 Summary (Why/How):
=======================

* ✅ push() = adds whole array as single element (nested array)
* ✅ concat() = merges arrays, returns a new array
* ✅ ...spread = clean merge of arrays into new array
! ✅ flat() = removes nesting (very useful for deeply nested structures)
? ✅ isArray() = checks if a value is an array
? ✅ from() = converts string or iterable to array
? ✅ of() = creates array from passed values
*/