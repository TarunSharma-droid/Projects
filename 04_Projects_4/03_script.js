

// generate a random color :
const random_color = function(){

    const hex = "0123456789ABCDEF" // This is a list of all letters and numbers used in color codes. means all the combinations of color made by these lettes only.
    
    let color = '#' // # is  used as all the color codes have # in the biggning. 

    for( let i = 0 ; i < 6 ; i++){  //This loop will run 6 times (because color codes need 6 characters like #FF00AA).

        color += hex[Math.floor(Math.random() * 16)]    // Math.floor(Math.random() * 16) ==> generates a nofrom 0  to 15
    }                                                   // Give me a random number between 0 and 15
                                                        // Use that number to pick a random character from the hex string
                                                        // For example, if the number is 10, you get hex[10] ==> A
    return color
}


let work;

const start = document.getElementById('start')
start.addEventListener('click',function(){

    const body = document.getElementById('main_body')
     
            work =  setInterval( function(){
                
                document.body.style.backgroundColor  =  random_color()

            },1000)
})

  
const stop = document.getElementById('stop')
stop.addEventListener('click',function(){

    clearInterval(work)
})