// ! ++++++++++++++++++++++++++++++ Date ++++++++++++++++++++++++

let myDate = new Date()
console.log(myDate.toString());        
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getFullYear());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(typeof myDate);

myDate.toLocaleString('default' , {
    weekday : 'long',
    day : '2-digit',
    year : '2-digit',
    dayPeriod : 'long',
    // timeStyle :'full' // You Cant Give Over 4 Options 
})

console.log(myDate);




// Output BY Numbring
// Sat Apr 05 2025 20:40:15 GMT+0530 (India Standard Time)
// Sat Apr 05 2025
// 5/4/2025, 8:40:15 pm
// 2025
// 5
// 6
// 20


