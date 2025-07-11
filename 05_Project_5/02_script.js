const random_No =  (Math.random() * 10 + 1)


const Form = document.querySelector('form')

Form.addEventListener('sumit',function(e){

const number_entered = Number(document.querySelector('Number_submited').value)

const Result = document.querySelector('result')

if ( number_entered <= 0 || number_entered > 10 || isNaN(number_entered) ){

    Result.innerHTML = "Please Provide valid number"
}

if (number_entered === random_No ){
   
    Result.innerHTML = "HURRAY!! You Guessed it right"
    
}
else{
    Result.innerHTML = "Try Again"
}
})
