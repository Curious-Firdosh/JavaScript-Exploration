let a = 20  
console.log(a);
a= 30 
console.log(a);

// Tuples 
let arr : [string , number] = ["Firdosh" , 22]

// Enumerations -Enum 
enum userRoles {
    ADMIN = "admin",
    Student = "student"
}
enum StatusCode {
    NOT_FOUND = "Error 404 Not Found "
}

StatusCode.NOT_FOUND


//any , Unknown , Void , Null , Undefined

// always  dont make  any variable type any  
let b; // that is type any where you wriute any data type they will run 


// ✅ 1. any
// "any" means the variable can be anything (string, number, object, etc)

let value1: any = "Hello";
value1 = 123;       // Okay
value1 = true;      // Okay
value1 = { name: "Firdosh" }; // Okay

console.log("any:", value1);

// ✅ 2. unknown
// "unknown" is like "any" but safer. You must check the type before using it.

let value2: unknown = "World";
value2 = 456;

if (typeof value2 === "number") {
  console.log("unknown is number:", value2 + 10);  // Safe to use after check
}

// ✅ 3. void
// "void" means the function does not return anything.

function sayHello(): void {
  console.log("Hello from Firdosh!");
}

sayHello();

// ✅ 4. null
// "null" means the variable is empty or nothing on purpose.

let value4: null = null;

console.log("null:", value4);

// ✅ 5. undefined
// "undefined" means the variable is declared but not given a value yet.

let value5: undefined = undefined;

console.log("undefined:", value5);

// ✅ 6. never
// "never" means the function never returns. It throws an error or loops forever.

function throwError(): never {
  throw new Error("This is a serious error!");
}

// throwError(); // Uncomment this line to see the error (it stops the program)

// Another never example: infinite loop
function infiniteLoop(): never {
  while (true) {
    console.log("Running forever...");
  }
}

// infiniteLoop(); // Uncomment to run forever (Ctrl+C to stop)
