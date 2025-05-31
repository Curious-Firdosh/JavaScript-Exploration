// 1️⃣ Basic Function Example
function addTwoNumbers(num1, num2) {
    return num1 + num2; // Just adds the two numbers
}

let result = addTwoNumbers(5, 10);
console.log("1️⃣ Add Result:", result); // Output: 15

// ❓ Why not use console.log inside return?
// 👉 If you do return console.log(num1 + num2), it returns undefined because console.log() does not return any value, it just prints to screen.

// --------------------------------------------------------

// 2️⃣ Default Parameters
function userLogedIn(username = "Firdosh") {
    return `${username} just logged in`;
}

console.log("2️⃣ Default Param:", userLogedIn());           // Output: Firdosh just logged in
console.log("2️⃣ Empty String:", userLogedIn(""));          // Output:  just logged in
console.log("2️⃣ With Name:", userLogedIn("Ali"));          // Output: Ali just logged in

// --------------------------------------------------------

// 3️⃣ Rest Parameters (...)
// Used when we don’t know how many arguments will come
const calculatePrice = (...prices) => {
    return prices;
};

console.log("3️⃣ Prices:", calculatePrice(100, 200, 300)); // Output: [100, 200, 300]

// --------------------------------------------------------

// 4️⃣ Function to Calculate Total Price from Rest Params
function totalPrice(...items) {
    let total = 0;
    for (let price of items) {
        total += price;
    }
    return total;
}

console.log("4️⃣ Total Price:", totalPrice(100, 200, 300)); // Output: 600

// --------------------------------------------------------

// 5️⃣ Anonymous Function (No Name)
const greet = function(name) {
    return `Hello, ${name}`;
};
console.log("5️⃣ Greeting:", greet("Firdosh")); // Output: Hello, Firdosh

// --------------------------------------------------------

// 6️⃣ Arrow Function
const multiply = (a, b) => a * b;
console.log("6️⃣ Multiply:", multiply(5, 4)); // Output: 20

// --------------------------------------------------------

// 7️⃣ Function Returning Another Function (Closure)
function outerFunction() {
    return function innerFunction() {
        return "I am inside the outer function!";
    };
}

const func = outerFunction(); // calling outer
console.log("7️⃣ Inner Function:", func());    // calling inner

// --------------------------------------------------------

// 8️⃣ Interview Style Question - Check if user is logged in
function isUserLoggedIn(username) {
    if (!username) {
        return "User not logged in!";
    }
    return `${username} is logged in.`;
}

console.log("8️⃣ Login Check:", isUserLoggedIn("Firdosh")); // Output: Firdosh is logged in.
console.log("8️⃣ No User:", isUserLoggedIn());              // Output: User not logged in!

// --------------------------------------------------------

// 9️⃣ Interview Question - Find Max Value using Rest Params
function findMax(...nums) {
    return Math.max(...nums);
}

console.log("9️⃣ Max Value:", findMax(10, 40, 90, 20)); // Output: 90

// --------------------------------------------------------

// 🔟 Self-Invoking Function (IIFE)
(function() {
    console.log("🔟 IIFE: This function runs by itself!");
})(); // Output: This function runs by itself!

