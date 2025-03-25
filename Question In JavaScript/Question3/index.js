let inps = document.querySelectorAll('input[type = "text"]')
let form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
   
    for(let i = 0 ; i < inps.length; i++){
       // always remenber value matlab form ke ander ka field-content
        if(inps[i].value.trim() === "")
        {
            alert("Fields Are not Filled");
            break;
        }
    }
})





// method -1 
// form.addEventListener('submit',function(event){
//    event.preventDefault();
//    if(inp1.value === "" || inp2.value ==="")
//    {
//       alert("Please Fill All The Fields")
//    }


// })