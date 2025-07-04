const switches = document.querySelectorAll('.switches')

const body = document.querySelector('body')

switches.forEach( (button) => button.addEventListener('click',function(e){       // sare buttons pe 'click' detect krne ka event function laga diya (addEventListener)
console.log(e)                                                                   // or fir ek function or laga diya jo ki click event ko hold karega or  batayega ki click event hone pr hoga kya.
console.log(e.target) // telling ki kis target(switch) se ye event aya hai
console.log(e.target.id)  // telling ki event jis target(switch) se aya hai uski id kya hai


if(e.target.id === 'box1'){
    body.style.backgroundColor = 'lightgreen'
}

if(e.target.id === 'box2'){
    body.style.backgroundColor = 'orange'
}
if(e.target.id === 'box3'){
    body.style.backgroundColor = 'lightblue'
}
if(e.target.id === 'box4') {
    body.style.backgroundColor = 'yellow'
}
if(e.target.id === 'box5') {
    body.style.backgroundColor = 'red'
}


})     )


// here e is holding the event of respective switch which we have clicked.