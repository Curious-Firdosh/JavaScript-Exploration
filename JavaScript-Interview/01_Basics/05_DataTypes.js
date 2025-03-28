// ✅ Primitive Data Types (7 types)

// Number
const num = 42;
console.log("Number:", typeof num); // "number"

// String
const str = "Hello, GPT!";
console.log("String:", typeof str); // "string"

// Boolean
const isTrue = true;
console.log("Boolean:", typeof isTrue); // "boolean"

// Undefined
let notDefined;
console.log("Undefined:", typeof notDefined); // "undefined"

// Null (Bug in JS - outputs 'object')
const empty = null;
console.log("Null:", typeof empty); // "object" (incorrect output, a known JS bug)

// Symbol
const id = Symbol("123");
const id2 = Symbol("123");
console.log("Symbol (id === id2):", id === id2); // false (Symbols are unique)
console.log("Symbol:", typeof id); // "symbol"

// BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log("BigInt:", typeof bigInt); // "bigint"

// ✅ Non-Primitive (Reference) Data Types

// Object
const obj = { name: "John", age: 30 };
console.log("Object:", typeof obj); // "object"

// Array (a special type of object)
const arr = [1, "hello", true, null, undefined];
console.log("Array:", typeof arr); // "object"

// Function
const func = function() { return "I am a function"; };
console.log("Function:", typeof func); // "function"

// Date (a special object for date and time)
const date = new Date();
console.log("Date:", typeof date); // "object"

// RegExp (regular expressions)
const regExp = /abc/;
console.log("RegExp:", typeof regExp); // "object"

// ✅ Summary Table for typeof Outputs

/*
| Data Type         | Example                         | typeof Output         |
|-------------------|---------------------------------|-----------------------|
| Number            | 42                              | "number"             |
| String            | "hello"                         | "string"             |
| Boolean           | true                             | "boolean"            |
| Undefined         | let x;                           | "undefined"          |
| Null (Bug)        | null                             | "object" (incorrect) |
| Symbol            | Symbol("id")                     | "symbol"             |
| BigInt            | 123n                             | "bigint"             |
| Object            | {name: 'John'}                   | "object"             |
| Array (Object)    | [1, 2, 3]                        | "object"             |
| Function (Object) | function() {}                    | "function"           |
| Date (Object)     | new Date()                       | "object"             |
| RegExp (Object)   | /abc/                             | "object"             |
*/

// ✅ Why typeof null is "object"?
// It's a bug in JavaScript due to how types were initially implemented in the early days.
// Null is a primitive, but typeof null incorrectly returns "object".




