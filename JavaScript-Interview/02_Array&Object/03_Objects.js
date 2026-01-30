// ===================================
// 📌 OBJECT KEYS, SYMBOLS & ACCESS
// ===================================

// ===================================
// ✅ 1. SYMBOL AS OBJECT KEY
// ===================================

// * Creating a Symbol (always unique)
const mykey = Symbol("mykey")

// * Defining object using object literal
const Js_User = {
    name: "Firdosh Khan",

    // ! ✅ Symbol key MUST be inside []
    // ! If we don't use [], it becomes a normal string key
    [mykey]: "helloji",

    class: "V",
    email: "Hello@Gail.com",
    password: 12323453,

    // * Key with spaces (invalid identifier)
    "Type kya hai ": "Instructor"
}

// ===================================
// ✅ 2. ACCESSING OBJECT VALUES
// ===================================

// ! Accessing key with spaces → ONLY bracket notation works
console.log(Js_User["Type kya hai "])

// ! Accessing Symbol key → MUST use symbol reference
console.log(Js_User[mykey])

// * WHY?
// * • Dot notation cannot be used with spaces or symbols
// * • Symbol keys are NOT strings



// ===================================
// ⚠️ IMPORTANT INTERVIEW TRAP
// ===================================

// ! ❌ WRONG (this will NOT work)
// ! console.log(Js_User.mykey)

// * WHY?
// * mykey here is treated as STRING "mykey"
// * But actual key is a SYMBOL, not a string



// ===================================
// ✅ 3. ADDING METHOD TO OBJECT
// ===================================

Js_User.greeting = function () {
    console.log("Hello JI SWAGATAM")
}

// ===================================
// ✅ 4. FUNCTION REFERENCE vs EXECUTION
// ===================================

// ? Function reference (NOT executed)
console.log(Js_User.greeting)
// ? Output: [Function (anonymous)]

// * Function execution
Js_User.greeting()
// ? Output: Hello JI SWAGATAM



// ===================================
// ⚠️ WHY console.log(Js_User.greeting()) prints undefined
// ===================================

console.log(Js_User.greeting())

// ! Explanation:
// ! • greeting() runs and prints message
// ! • BUT greeting() does not return anything
// ! • Functions without return → return undefined
// ! • console.log prints that undefined