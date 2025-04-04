// ++++++++++++++++++++++++++++ NUMBER ++++++++++++++++++++++++++++++++

// Basic number
const score = 1000;
// console.log(typeof score); // Output: 'number' (Primitive type)
// console.log(score); // Output: 1000

// Using Number as an object
const Score1 = new Number(100);
// console.log(typeof Score1); // Output: 'object' (Wrapped in Number object)
// console.log(Score1); // Output: [Number: 100]
// console.log(Score1.toFixed(3)); // Output: '100.000'
// --> toFixed(n) adds decimal precision up to 'n' places.

const score2 = 3400000000;
// console.log(score2); // Output: 3400000000 (same value)
// console.log(score2.toLocaleString("en-IN")); 
// Output: '3,40,00,00,000' → Formatted using **Indian Numbering System**

// Number constants
// console.log(Number.MAX_VALUE);         // Largest possible number in JS
// console.log(Number.MIN_VALUE);         // Smallest positive number (close to 0, not negative)
// console.log(Number.MAX_SAFE_INTEGER);  // 2^53 - 1 → Safe integer range
// console.log(Number.MIN_SAFE_INTEGER);  // -(2^53 - 1)

// ++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++

// Math.abs(x)
// console.log(Math.abs(-4)); 
// Output: 4 → Converts negative to positive

// Math.round(x)
// console.log(Math.round(890.098)); // Output: 890
// console.log(Math.round(90.49999)); // Output: 90
// → Rounds to nearest integer

// Math.min() → Finds minimum value
// console.log(Math.min([1, 5, 6, 456, 9])); 
// ❌ Output: NaN → Because Math.min() doesn't take an array directly.
// ✅ Correct usage: Math.min(...[1, 5, 6, 456, 9]) → Spread operator is required.

// Math.max(x, y, z...)
// console.log(Math.max(1, 5, 6, 456, 9)); // Output: 456

// Math.random()
// console.log(Math.random()); 
// → Output: Random decimal between 0 (inclusive) and 1 (exclusive)

// Generating random integers between 1 and 10:
// console.log(Math.floor(Math.random() * 10) + 1); 
// Explanation:
// - Math.random() gives 0 to <1
// - Multiply by 10 → range becomes 0 to <10
// - floor() removes decimals → 0 to 9
// - Add 1 → Final range: 1 to 10

// Generating random numbers between custom min and max range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Explanation:
// - (max - min + 1): Ensures upper limit is included (i.e. 20)
// - floor(): removes decimal part
// - + min: shifts range from 0–(max-min) to min–max
// ✅ Output: always between 10 and 20

