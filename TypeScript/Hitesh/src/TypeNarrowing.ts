function Chai(kind : string | number) {

    if(typeof kind === "string"){
        return console.log(`Serving ${kind}`);    
    }
    else {
        console.log(`${kind} cups chaii with buscuit`)     
    }
}

// Chai("Masala Chaiii");


type masalaChai = {type :"masala" ,spiceLevel:number }
type gingerChai = {type : "ginger" , amount : number}
type elaichiChai = {type :"elachi" , count : number}

type Chai = masalaChai | gingerChai | elaichiChai

function makeChai(order:Chai) {
    switch (order.type) {
        case "elachi":
            console.log("serve him Elaichi Chai");
            break;
        case "ginger" :
            console.log("serve him ginger Chai");
            break;
        case "masala" :
            console.log("serve him Masala Chai");
            break;
    }
}


makeChai({type : "elachi" , count :2})


function makingChaiAgain (order : masalaChai | gingerChai | elaichiChai) {
    if("masala" in order){
        console.log("Give him a mast masala chaiii");
    }
    else {
        console.log("Sorry it is not available ");
        
    }
}

makingChaiAgain({type : "masala" , spiceLevel : 0})