// let home = document.querySelector('#home')
// let about = document.querySelector('#about')
// let contact = document.querySelector("#contact")
// let homeText = document.querySelector('.home-text')
// let abouttext = document.querySelector('.abouttext')
// let contacttext = document.querySelector('.contacttext')
// let h3 = document.querySelectorAll('h3');

// homeText.style.display = 'block'

// home.addEventListener('click' , function(){
//     ChoseOne();
//     homeText.style.display = 'block'
    
// })
// about.addEventListener('click' , function(){
//     ChoseOne();
//     abouttext.style.display = 'block'
// })
// contact.addEventListener('click' , function(){
//     ChoseOne();
//     contacttext.style.display = 'block'
// })

function ChoseOne(){
   texts.forEach((val)=>{
      val.style.display = "none"
   })
}


// Method -- 2 Optimize Way 

let divs = document.querySelectorAll('.tab');
let texts = document.querySelectorAll('h3');

texts[0].style.display = 'block';

divs.forEach((div,index) => {
    div.addEventListener('click',  function(){
        ChoseOne()
        texts[index].style.display = 'block'
    })
})