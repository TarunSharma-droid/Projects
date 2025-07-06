const clock = document.getElementById('box2')
// document.querySelector('#box2') we can also do

// let date = new Date()
// clock.innerHTML = date.toLocaleString() ==> gives the static date and time but not the dynamic changing time.
// so we will not use method to show the clock.



setInterval(function(){ // setInterval have the two parameters. this function have a special feature that it runs again and again after a time given

    let date= new Date()

    clock.innerHTML  = date.toLocaleTimeString();

},1000) // here we are giving the time in milliseconds (1000) it means after every 1000 millisec (1 sec ) time will change.



