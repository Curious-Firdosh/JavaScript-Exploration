let Download = document.querySelector('#Download')
let DownloadProg = document.querySelector('#DownloadProgress')
let btn = document.querySelector('button')
let h3 = document.querySelector('h3')
let count = 0;

    let int = setInterval(function(){
        if(count === 100)
        {
            clearInterval(int);
            h3.style.opacity = 1;
            
        }
        count++;
        DownloadProg.style.width = count + "%"
        
    },50);





