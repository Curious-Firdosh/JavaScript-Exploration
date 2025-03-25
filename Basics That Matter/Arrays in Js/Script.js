// InBuilt Objects ---> 
   // 1. Math --> Go to Cosole
   // 2.String --(It Is Not Primitive Stirng THat IS Object String)

      //   // Declaration/Creation ;

      //      let firstName = new String('Hello My Name is Firdosh Khan')
      //       console.log(firstName);

      //    let a =    firstName.trim();
      //    console.log(a)

      //    //  ############ By For Loop itration iN sTRING  ############
      

      //    for(let i = 0 ; i < firstName.length ;i++)
      //       {
      //          console.log(firstName[i].split(' '))
      //       }

      //       //  ############ By WHile Loop ############

      //     console.log('By WHile Loop');
         
      //     let i = 0
      //     while(i < firstName.length){
      //       console.log(firstName[i].split(' '));
      //       i++
      //    }


      // ############ ARRAYS ######################
      
      // 1 . Insertion --> 
            // let arr = [1,2,34,5,6,7]
            //-> END 
               //  arr.push(9)
            
            //--> Start
               //  arr.unshift(9)
            
            //---> Middile
                  // arr.splice(1,0,'b','c')
                  // console.log(arr);

                  // arr.splice(1,2,'@','$','%')
                  // console.log(arr);
      
      // 2. Searching ---->         
               // console.log(arr);
            //==> INDEXOF() --> Find Any Element IN Arrays bY 
                        // console.log(  arr.indexOf('&'));

            //==>Include() --> Is THat Include THat Element
                        // console.log(arr.includes(9));
           
   // IN the referece Data Type the serching [Inbuilt Object ] dosent Work 
   // -->Example
               // let courses= [
               //    {name:'Firdosh' , class : 12},
               //    {name:'Taha' , class:12}
               // ]; // the output is false because you know referece DataType deals with address
               // console.log(course.includes({name:'firdosh',class:12}));
   
      // -->To Cheak The Object Is Present In Array or NoT Then Use Callback Function

            // let course =  courses.find( (course) => {
            //       return  course.name === 'Firdosh';  // It return The Object wHERE tHE Firdosh Exist 
            // })
            //  console.log(course);
   
   
 // ########### Removing Element From Array ###############
               
         // let arr = [45,6,7,8,9,0]
               //--> End 
                  // arr.pop(0)
               
               //--> Start 
                  // arr.shift(45)
               
               //--> Middile
                  // arr.splice(2,1)
                  // console.log(arr)


// ############# Emptying An  Array  ###########
               // Example - 1 ---> Here NUmbers array ka refrence ja raha hai number 2 main isliye wo copy nahi reference  jayega 
                     //  let numbers = [2,3,4,5,6]
                     //  let numbers2 = numbers;
                     //  numbers = []; 
                     //  console.log(numbers);
                     //  console.log(numbers2) // issue that numbers value still exist in numbers 2

               // Example-2 ---> 

                     // let numbers = [2,3,4,5,6]
                     // let numbers2 = numbers;
                     // numbers.splice(0,numbers.length)
                    // numbers.length = 0; // Best Method To Empty An ARRAY
                     // console.log(numbers);
                     // console.log(numbers2);


// ############# Combining And Slicing Arrays #############
               
         // let arr1 = [2,5,6,7,8] // 
         // let arr2 = ['a','c','d','t','r'] 
         //---> Concat 
            // let combine = arr1.concat(arr2)
            // console.log(combine);
         //--> Slice ;
               // let sliced = arr1.slice(1,4)
               // let sliced = arr1.slice(1)
               // let sliced = arr1.slice() // pure arrray ki copy ban jasayegy
               // console.log(sliced);
         
         // ---> CopyIng An Array By SpreddOperator 
               // let a = [...arr1,...arr2]
               // console.log(a);

//----->>>> ItratinG in ARRAYS 
            // let arr2 = ['a','c','d','t','r'] 
               // 1. --> For-oF loop

                     //    for(let elem of arr2){
                     //      console.log(elem);
                     //   }

                // 2. For Each Loop 

                     // arr2.forEach((elem) => {
                     //    console.log(elem);
                     // })

// Join and Split and sort these are method when you add with array 

// ************** Sorting In Reference Type aRRAY *************

 
//  ************** Filtering in Arrays **************

      //    Example 1 --> 

         // let Arr = [123,'a','b','c',-7,9,65,8,-3,-6,7,-8.9]
         // let filterd = Arr.filter((indx) => {
         //    return indx < ;
         // })
         // console.log(filterd);

        
//  ************** Maping Arrays **************

            // let Arr = [123,'a','b','c',-7,9,65,8,-3,-6,7,-8.9];
            // let Maped = Arr.map((indxVlue) => {
            //     return indxVlue;
            // })
            
            // console.log(Maped);
      
      //----->>>> Mapping With Object >>>>>------

            // let Arr = [12,'Firdosh','Taha','Raja',-7,9,65,8,-3,-6,7,-8.9];
            
            // let filterd = Arr.filter((IndxValue) => {
            //       return IndxValue > '97' 
            // })

            // console.log(filterd);

            // let info  = filterd.map((value) => {
            //       return {name : value}
            // })
            // console.log(info);

// +++++++++++++++ ChainIng In JavaScript --->
            
         let Arr = [12,'Firdosh','Taha','Raja',-7,9,65,8,-3,-6,7,-8.9];

          let info  = Arr
                     .filter( IndxValue => IndxValue <= 0)
                     .map(value =>  {name : value});
         
               console.log(info);