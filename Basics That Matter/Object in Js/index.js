// Object ---> ismain kisi bhi physical entity ka property or behaviar hota hai 

//  Declaration -->
    // let Object = {
    //     name:'Firdosh',
    //     age: '19',
    //     // Function Which Is Under The Object That Called Method
    //     draw (){
    //         console.log('Hello How Are You ?')
    //     }
    // }

    // console.log(Object.draw())

// Object Creation Multiple Times With Function 

// 1 . Factory Function --> ye Code Repeat Hone Nahi Dega 
    
    //    function creatRectangle(Newname , Newage){
    //       return  Object = {

    //           name : Newname,
    //             age: Newage,

    //             // Function Which Is Under The Object That Called Method
    //             draw (){
    //                 console.log('Hello How Are You ?')
    //             }
    //         }
    //    }

    // let rectangle1 = creatRectangle("Firdosh",90);
    // let rectangle2 = creatRectangle('Taha', 20)

// 2. Constructer Function --->  PascalNotation --->  First Letter Capital

    // let Humans = function(name,age){
    //     this.Name = name ;
    //     this.age = age;
    //     this.Run = function run(){
    //         console.log(`${name} is Running Very Fast`)
    //     }
    // }

    // let Human1 = new Humans('Firdosh', 70)
    // let Human2 = new Humans('Taha',19)

// Dynamic Nature Of Object ---->>>  ADD oR Delete Propertie Dynimacally
   
    // Human1.color = 'Yellow'; // Dynamically Added That Property 
    // delete Human1.color ;  // Deleting The Property


// Primitive And Refrence DataType 

// 1. Primitive Data-type --->  
       
        // let a =10;
        // let b = a;
        // a++;           Outputs
        // console.log(a);  11 
        // console.log(b);  10
        // Koi Bhi Pirimitive data type main jb hum copy karte hai to ek copy value ka ban jata hai 

 // 2 . Reference Data Type ---->

        // let a = {value:10};
        // let b = a ;  B will be pointing the address of a not value of a

        // a.value++;          Outputs
        // console.log(a.value); 11
        // console.log(b.value); 11

// Trickey GIVE outputs--->

    // let a = 10;
    // function inc(a){
    //     a++;
    // }
    // inc(a);
    // console.log(a); // Output is 10 because the function is making own variable a
    

// Accesing Properties IN Object 
    
    //  1 .For In Loops 
        // let a = {
        //     name:"Firdosh",
        //     Age:20
        // }
                
        // for(let anderWla in a){
        //     console.log(`${anderWla} = ${a[anderWla]}`)
        // }

// If You Want To Cheak The Vlaue/Propety Exist In Object Or Not THen 

        //  let a = {
        //     name:"Firdosh",
        //     Age:20,
        //     color:'red'
        // }
    //  1. With If-Else
        
       // if('color' in a){
        //     console.log('present');
        // }
        // else{
        //     console.log('Not Present');
        // }

    // 2. With TerneryOperator -->

        // 'color' in a ? ( console.log('present')) :  ( console.log('Not Present'))

// Object Cloning ---> 

       //  1. By Itration 😂😂-->
            
    //    let a = {
    //             name:"Firdosh",
    //             Age:20,
    //             color:'red'
    //         }
        
        // let b = {};

            // for(key in a){
            //     b[key] = a[key]
            // };
            // console.log(a);
            // console.log(b); // CLoned SuccessFully 😒✅✅

        // 2 . Through Object.Assign ; ❤️ ismain hum multiple object bhi ek object main clone kar skate hai 
            
            //  let a = {
            //             name:"Firdosh",
            //             Age:20,
            //             color:'red'
            //         }
        
            //  let c = {value:300}
            //  let d = {isPlaying:true}

            // let b = Object.assign({},a,c,d);

            // console.log(b) // CLoned SuccessFully 😒✅✅
         
        // 3 . Through Spredd Operator[...]
           
            // let b = {...a,...c,...d}
            // console.log(b)


          


        