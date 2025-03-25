let addBtn = document.querySelector('#add')
let rmovBtn = document.querySelector('#remove')
let inp = document.querySelector('input')
let list = document.querySelector('li')
let Ul = document.querySelector('ul')



addBtn.addEventListener('click' , function(){
    if(inp.value.trim() === '') {}

    else{
         list = document.createElement('li')
         list.textContent = inp.value.trim();
         Ul.appendChild(list) 
    }
})

rmovBtn.addEventListener('click' , function(){
    Ul.removeChild(list)
})
