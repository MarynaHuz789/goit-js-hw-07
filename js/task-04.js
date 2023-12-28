const form = document.querySelector(".login-form")
let dataForm = {}

form.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault()
    
    const { elements: { email, password },
    } = event.currentTarget;

if (email.value.trim() === "" || password.value.trim() === "") {
    return alert('All form fields must be filled in')
} 

dataForm.email = email.value
dataForm.password = password.value

console.log('DataForm:', dataForm)
   
event.currentTarget.reset()    
}