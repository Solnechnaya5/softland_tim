// validate form
const form = document.querySelector('.sucribe-form');
const emailField = document.querySelector('#email');
const submitBtn =document.querySelector('.subscribe-form_btn');
let spanError = document.querySelector('.error');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

submitBtn.addEventListener('click', function() {
  
      if(emailField.value =="" ){
      spanError.textContent = "Email Address is required."
      spanError.style.display = "block"; 
      submitBtn.setAttribute("type", 'button');
      }else if(!emailField.value.match(pattern)){
        spanError.textContent = "Email addresses should follow the format user@domain.com."
        spanError.style.display = "block"; 
        submitBtn.setAttribute("type", 'button')
      }else{
        spanError.textContent = ""
        spanError.style.display = "none"; 
        submitBtn.setAttribute("type", 'submit')
      }

    })