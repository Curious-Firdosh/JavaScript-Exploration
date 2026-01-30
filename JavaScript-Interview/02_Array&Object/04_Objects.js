// ===================================
// 📌 JAVASCRIPT OBJECTS – WITH EXPLANATION
// ===================================


// ===================================
// ✅ 1. OBJECT CREATION
// ===================================

// * Non-Singleton Object (MOST COMMON WAY)
// * Using object literal {}
const tinderUser = {}

// * Adding properties dynamically
tinderUser.id = "908abc"          // ? unique id
tinderUser.name = "Firdosh"       // ? user name
tinderUser.isLoggedIn = false     // ? login status
tinderUser.password = 345679      // ? password

// ? Prints the complete object
console.log("Tinder User:", tinderUser)


// * Singleton Object (less common)
// ! Creates object using constructor
// ! const tinderUser = new Object()
// * NOTE: Both ways create objects, but {} is preferred



// ===================================
// ✅ 2. NESTED OBJECT ACCESS
// ===================================

const regularUser = {
    email: "fj678@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Firdosh",
            lastName: "Khan"
        }
    }
}

// ? Accessing nested properties step by step
console.log(
  "First Name:",
  regularUser.fullName.userFullname.firstName
)

// * WHY?
// * Each dot (.) goes one level deeper into the object



// ===================================
// ✅ 3. MERGING OBJECTS
// ===================================

let obj1 = { name: "Hello" }
let obj2 = { name: "Bhakkkk", age: 22 }

// * 🔹 Using Spread Operator
// * Creates a NEW object, does not modify originals
const merged1 = { ...obj1, ...obj2 }

// ! 🔹 Using Object.assign()
// ! {} is target object (important)
const merged2 = Object.assign({}, obj1, obj2)

console.log("Merged with spread:", merged1)
console.log("Merged with assign:", merged2)

// ! NOTE:
// ! If same key exists, later value overwrites earlier one



// ===================================
// ✅ 4. ARRAY OF OBJECTS
// ===================================

const users = [
    { id: 1, name: "Hello Khan" },
    { id: 2, name: "Firdosh" },
    { id: 3, name: "Khan Bhai" }
]

// ? Accessing full object
console.log("User 1:", users[0])

// ? Accessing specific property
console.log("User 2 Name:", users[1].name)

// ! ⚠️ WRONG WAY (DO NOT USE)
// ! console.log(users[0, 1])
// * WHY?
// * JS comma operator returns last value → users[1]



// ===================================
// ✅ 5. OBJECT METHODS
// ===================================

const userObj = {
    name: "Firdosh",
    age: 21
}

// ? Check if property exists in object
console.log("Has name?", userObj.hasOwnProperty("name"))

// * Get all keys as array
console.log("Keys:", Object.keys(userObj))

// * Get all values as array
console.log("Values:", Object.values(userObj))

// * Get key-value pairs as array
console.log("Entries:", Object.entries(userObj))



// ===================================
// ✅ 6. OBJECT DESTRUCTURING
// ===================================

const course = {
    courseName: "JS Hindi by Hitesh Choudhary",
    price: 999,
    courseInstructor: "Hitesh"
}

// * Destructuring with renaming
const {
  courseName: Naam,
  courseInstructor,
  price
} = course

console.log("Course:", Naam)
console.log("Instructor:", courseInstructor)

// * WHY?
// * Destructuring makes code shorter and cleaner
// * Very common in React props



// ===================================
// ✅ 7. API – BASIC UNDERSTANDING
// ===================================

/*
 * API = Application Programming Interface
 *
 * ? • API allows two applications to communicate
 * ? • Client sends request → Server sends response
 * ! • Data format used today = JSON
 * ! • Earlier format = XML (mostly outdated)
 *
 * Example API JSON response:
 * {
 * "user": "Firdosh",
 * "isLoggedIn": true
 * }
 */

// * Objects are used to STORE and HANDLE API data