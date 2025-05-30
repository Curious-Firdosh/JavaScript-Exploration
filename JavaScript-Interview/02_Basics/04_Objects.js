// ✅ 1. OBJECT CREATION

// 🔸 Non-Singleton Object (Common way)
const tinderUser = {}

tinderUser.id = "908abc"
tinderUser.Name = "Firdosh"
tinderUser.IsLogedIn = false
tinderUser.passsword = 345679

// 🔸 Singleton Object (less used but valid)
// const tinderUser = new Object()

console.log("Tinder User:", tinderUser)


// ✅ 2. NESTED OBJECT ACCESS

const regularUser = {
    email: "fj678@gmail.coim",
    fullName: {
        userFullname: {
            firstName: "Firdosh",
            lastName: "Khan"
        }
    }
}

// Access nested properties
console.log("First Name:", regularUser.fullName.userFullname.firstName)


// ✅ 3. MERGING OBJECTS

let obj1 = { Name: "Hello" }
let obj2 = { Name: "Bhakkkk", age: 22 }

// 🔸 Using spread operator
const merged1 = { ...obj1, ...obj2 }

// 🔸 Using Object.assign()
const merged2 = Object.assign({}, obj1, obj2)

console.log("Merged with spread:", merged1)
console.log("Merged with assign:", merged2)


// ✅ 4. ARRAY OF OBJECTS

const users = [
    { id: 1, name: "Hello Khan" },
    { id: 2, name: "Firdosh" },
    { id: 3, name: "Khan Bhai" }
]

// Access individual user
console.log("User 1:", users[0])
console.log("User 2 Name:", users[1].name)

// ⚠️ Incorrect usage:
// console.log(users[0, 1])  // JS comma operator returns last value, so this becomes users[1]


// ✅ 5. OBJECT METHODS

const userObj = {
    name: "Firdosh",
    age: 21
}

// Check if property exists
console.log("Has name?", userObj.hasOwnProperty("name"))  // true

// Get all keys
console.log("Keys:", Object.keys(userObj))

// Get all values
console.log("Values:", Object.values(userObj))

// Get all entries
console.log("Entries:", Object.entries(userObj))


// ✅ 6. OBJECT DESTRUCTURING

const course = {
    CourseName: "JS Hindi by Hitesh Choudhary",
    price: 999,
    courseInstructor: "Hitesh"
}

// Destructure and rename CourseName
const { CourseName: Naam, courseInstructor, price } = course

console.log("Course:", Naam)
console.log("Instructor:", courseInstructor)


// ✅ 7. API - BRIEF EXPLANATION

/**
 * API = Application Programming Interface
 * 
 * ➤ API is a way for applications to talk to each other.
 * ➤ Used to send/receive data between client and server.
 * ➤ In old days, data was shared using XML.
 * ➤ Today, most APIs return data in JSON format.
 * 
 * Example JSON from API:
 * {
 *    "user": "Firdosh",
 *    "isLoggedIn": true
 * }
 */

