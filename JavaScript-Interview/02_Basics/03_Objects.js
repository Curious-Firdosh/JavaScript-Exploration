//singleTon
    //  Object.create 
// Object Linterals

const Js_User = {
    name : "Firdosh Khan",
    class : "V",
    email : "Hello@Gail.com",
    password : 12323453,
    "Type" : "Instructer"

}

// AccesS Method 
 console.log(Js_User.email);
 //!You Cant Access The Data with . You Have to use Square NOtation
 console.log(Js_User["Type"]);
 
 console.log(Js_User["email"]);

 Js_User.greeting = function (){
    console.log("Hello JI sWAGATAM ");
    
 }

 console.log(Js_User.greeting) ; // Function iS Not Executing Here [Function (anonymous)] that simply giving the Referernce 
 console.log(Js_User.greeting());
 
 
 
 