let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let timer = document.querySelector('p')
let stopTimer;
start.addEventListener('click' , () => {
    let count = 0;
    // With THis We Start THe Timer
    stopTimer = setInterval(() => {
        timer.textContent = count;
        count++
    } , 1000)
})

stop.addEventListener('click',  () => {
    clearInterval(stopTimer) //For Stoping The timer 
})