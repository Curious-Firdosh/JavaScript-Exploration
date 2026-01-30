const data = [
    {   
        id : 1,
        name: "Firdosh",
        marks: 10
    },

    {
            id : 2 ,
        name: "riteh",
        marks: 30
    },
    {
            id : 3,
        name: "jhon",
        marks: 70
    },
    {
            id : 4,
        name: "Fhim",
        marks: 190
    },
    {   
            id : 5,
        name: "firoj",
        marks: 1300
    },

]



let a = data.map((user) => 
{
    if(user.marks = 10){
        console.log("userAfter map " ,user);
        
    }
}
)
console.log(data);

console.log("and  then " ,a);






