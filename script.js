var first_name = document.getElementById("firstname")
var last_name = document.getElementById("lastName")
var button = document.getElementById("btn")
var password = document.getElementById("name")
var email = document.getElementById("email")
var emailError = document.getElementById("email_address")
var phone= document.getElementById("number")
var phoneError = document.getElementById("phone_number")
var error = document.createElement('p')

function NameValidation(){
    var firstValueCheck = parseInt(first_name.value)
    var lastValueCheck = parseInt(last_name.value)
    if(!isNaN(firstValueCheck) || !isNaN(lastValueCheck)){
        console.log("Integer")
        error.innerHTML="Cannot Enter Any Numbers"
        error.className="error"
        password.appendChild(error)
    }       
    else if(!first_name.value || !last_name.value){
        error.innerHTML="Enter You Full Name"
        error.className="error"
        password.appendChild(error)
    }
}

function emailValidation(){
    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)){
        console.log("Valid Email")
    }
    else{
        console.log("WORKING")
        error.innerHTML="Enter A Valid Email"
        error.className="error"
        emailError.appendChild(error)
    }
}

function phoneNumberValidation(){
    var phoneNumberValue=phone.value.length
    console.log(phoneNumberValue)
    if(phoneNumberValue<9){
        error.innerHTML="Invalid Number"
        error.className="error"
        phoneError.appendChild(error)
    }
    else{
        console.log("VALID")
    }
}

function EmptySpaces(){
    if(!first_name.value && !last_name.value && !email.value && !phone.value){
        error.innerHTML="All The Fields Are Empty"
        error.className="error"
        phoneError.appendChild(error)
    }
}


button.addEventListener("click",function(){
    error.innerHTML=""
    console.log("clicked!")
    phoneNumberValidation()
    emailValidation()
    NameValidation()
    EmptySpaces()
})