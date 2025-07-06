const form = document.querySelector('form') //form ko select kiya or hold kiya variable mai 

form.addEventListener('submit',function(e) {   // form pe ek event function laga diya "submit" type ka jo ki form mai hone wale submission ko detect kargea.
// Now jo event(submission) detect hua hai  usko ek function mai send kr diya with all the values inside it .

    e.preventDefault()
    const height = Number(document.querySelector('#height').value) 

    // #height se vo element select ho gya jismai height ki value gyi hai i.e. input or (.value) krke hamne vo value le li....
    // since value hame string mai milti hai to usko Int mai convert krna padega parcing krke.

    const weight = Number(document.querySelector('#weight').value)

    const result = document.querySelector('#result') // #result krke hamne result id ke elemenet ko select kr liya

    if(height === "" || weight ==="" || height < 0 || weight < 0 || isNaN(height) || isNaN(weight)) {

        result.innerText ="Please give valid Height or Weight"
    }
    // if we doesnt give any value in height or weight or if we give smaller value than 0 to height or weight or if we give any value to
    // height or weigth than in all that case if statement will run.

    else {
            const ans= weight / ((height / 100)**2) // give  answer upto 2decimal place only.
            result.innerText = `Your BMI is : ${ans.toFixed(2)}`
    }
}
)  


/* e.preventDefault()===> is very important function in this code 
It's a method used in event handling in JavaScript to prevent the default behavior of an event from happening.

here,
when a <form> is submitted (i.e., when you click the submit button), the browser tries to: reload the page or 
navigate away (usually sending data to the server), and Clearing the input fields and losing your JavaScript results.
which means ===>
The page will refresh,
The result will disappear immediately,

So to overcome this ambiqutie this funtion is used here . It will helps in preventing the page from refreshing .*/