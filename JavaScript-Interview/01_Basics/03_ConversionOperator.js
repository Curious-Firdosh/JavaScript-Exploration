// 🔢 Example: Chained Assignment
// In JavaScript, chained assignment works right-to-left.
// Here, c is set first, then b gets c’s value, and finally a gets b's value.
let a, b, c;
a = b = c = 1 + 4; // 1+4 equals 5
console.log(a); // 👉 Output: 5
console.log(b); // 👉 Output: 5
console.log(c); // 👉 Output: 5

/* 
💡 Explanation:
- The expression "1+4" evaluates to 5.
- Then, c = 5, b = c (which is 5), and a = b (which is 5).
- This technique is useful in interviews to show that you understand evaluation order.
*/

/* =========================
   Type Conversion & Coercion
   ========================= */

// Explicit Type Conversion (Casting)
// Use built-in functions to convert values manually.
const scoreStr = "33"; // A numeric string
console.log(typeof scoreStr); // 👉 "string"

// Convert string to number explicitly using Number()
const scoreNum = Number(scoreStr);
console.log(typeof scoreNum); // 👉 "number"
console.log(scoreNum);        // 👉 33

// Edge Case: Converting an invalid numeric string returns NaN
const invalidScore = Number("345asdjkf"); 
console.log(invalidScore); // 👉 NaN 😕

// Converting undefined results in NaN:
console.log(Number(undefined)); // 👉 NaN

// Converting an empty string results in 0:
console.log(Number("")); // 👉 0

// Boolean Conversion examples:
console.log(Number(true));  // 👉 1 ✅
console.log(Number(false)); // 👉 0 ✅

/* 
💡 Quick Tips:
- Use Number() to explicitly convert a value to a number.
- Remember: Boolean values (true/false) become 1 or 0.
*/

/* =========================
   Implicit Type Coercion
   ========================= */

// When using the '+' operator with a number and a string, JavaScript converts the number to a string:
console.log(1 + "2"); // 👉 "12" (string concatenation) 🔤

// More examples:
console.log(1 + "2" + 3); // 👉 "123" because once a string appears, the rest are concatenated.
console.log("1" + 1 + "3"); // 👉 "113"
console.log("1" + 2 + 2);   // 👉 "122"
console.log(1 + 2 + "2");   // 👉 "32" (first addition: 1+2=3, then "3" + "2" → "32")

// Unary Plus converts values to numbers:
console.log(+true);  // 👉 1
console.log(+"");    // 👉 0

/* 
💡 Note:
- The '+' operator is special: if any operand is a string, it converts the other to a string.
- Other arithmetic operators like '-' or '*' automatically convert strings to numbers.
*/

/* =========================
   Best Practices & Interview Tips
   ========================= */

/*
👉 When comparing values, use the strict equality operator (===) to avoid unexpected coercion.
👉 Always perform explicit type conversion when you need control—this avoids surprises.
👉 Remember:
   - String to Number: Number(), parseInt(), parseFloat()
   - Number to String: String(), .toString()
   - Boolean conversion: Boolean(), or using !! (double NOT)
   
These fundamental conversions often come up in interviews, so being clear about them (with examples like the ones above) will boost your confidence! 🚀
*/
