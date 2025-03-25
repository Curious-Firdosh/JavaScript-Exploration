 let Animals = document.querySelector('#Animals');
 let Input = document.querySelector('input')
 
 let data = [
    {
        name : 'tiger', src : 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name : 'lion', src : 'https://images.unsplash.com/photo-1511216113906-8f57bb83e776?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name : 'monkey',
        src : 'https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name : 'donkey',
        src : 'https://images.unsplash.com/photo-1561840136-82fc1f3ec89d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
    {
        name : 'cow',
        src : 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name : 'elephent',
        src : 'https://plus.unsplash.com/premium_photo-1661950072324-96d988d266c4?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name : 'sheep',
        src : 'https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name : 'hen',
        src : 'https://images.unsplash.com/photo-1563409236340-c174b51cbb81?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name : 'elephentSeals',
        src : 'https://images.unsplash.com/photo-1567720274370-c1718d9ee1ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name : 'nutria',
        src : 'https://images.unsplash.com/photo-1548874039-4b0143a12aea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

 
]

let Animal = "";

data.forEach(function(info){
    Animal +=  `<div id="Animal">
                    <div class="image">
                        <img src= ${info.src} alt="">
                     </div> 
                    <h3>${info.name}</h3>
              </div>  `
});

Animals.innerHTML = Animal ;


Input.addEventListener('input' , function(){
     let matching = data.filter(function(elem){
        return elem.name.startsWith(Input.value)
     })
     let users = "";
     matching.forEach(function(info){
       users +=  `<div id="Animal">
                        <div class="image">
                            <img src= ${info.src} alt="">
                         </div> 
                        <h3>${info.name}</h3>
                  </div>  `
    });
    
    Animals.innerHTML = users ;
})






