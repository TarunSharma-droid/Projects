const random_No =  Math.floor(Math.random() * 10 + 1 )  // Math.random() ==> Generates a random decimal number between 0 and 1 (but never exactly 1).
                                                        // Math.floor(Math.random() * 10 + 1 ) ==> generate a random integer between 1 and 10 (both inclusive).
const Form = document.querySelector('form')
let arr =[]

Form.addEventListener('submit',function(e){
    e.preventDefault()

const number_entered = Number(document.querySelector('#Number_submited').value)

const Result = document.querySelector('#result')

if ( number_entered <= 0 || number_entered > 10 || isNaN(number_entered) ){

    Result.innerHTML = "Please Provide valid number"
}

else if (number_entered === random_No ){
   
    Result.innerHTML = "HURRAY!! You Guessed it right"
    
}
else{
    Result.innerHTML = "Try Again"
}


const previous_no = document.querySelector('#previous_result')

// const arr = [] : if declared insside
//A new empty array is created every time you submit the form.
//It forgets previous guesses.
//So only one guess gets stored each time.

arr.push(number_entered)
previous_no.innerHTML = `Previous Guesses are : ${arr.join(', ')}`


})

