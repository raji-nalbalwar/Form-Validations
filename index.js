const form = document.getElementById('form');
const middelname = document.getElementById('middelname');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener("submit", (event) => {
    validateInputs();
    console.log(isFormValid());
    if (isFormValid() == true) {
      form.submit();
    } else {
      event.preventDefault();
    }
  });
  
  function isFormValid() {
    const inputContainers = form.querySelectorAll(".input-control");
    let result = true;
    inputContainers.forEach((container) => {
      if (container.classList.contains("error")) {
        result = false;
      }
    });
    return result;
  }

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}
const isValidEmail = email => {
    const re =  /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidFirstname = firstname =>{
    const fi = /^[A-Z][a-z 0-9]+$/;
    return fi.test(String(firstname));
}
const isValidLastname = lastname =>{
    const la = /^[A-Z][a-z 0-9]+$/;
    return la.test(String(lastname));
}
const isValidMiddelname = middelname =>{
    const me = /^[A-Z][a-z 0-9]+$/;
    return me.test(String(middelname));
}
const isValidPhone = phone =>{
    const ph = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    return ph.test(Number(phone));
}
const isValidPassword = password =>{
    const pa = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pa.test(password);
}

const validateInputs = () => { 
    const middelnameValue = middelname.value.trim();
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
// middelname validation
    if(middelnameValue === '') {
        setError(middelname, 'Middel Name is required');
    }else if (middelnameValue.length < 2 ) {
        setError(middelname, 'Middel Name must be atleast 2 character.') 
    }else if (!isValidMiddelname(middelnameValue)){
        setError(middelname,'Provide a valid middelname 1st letter of the name should be in uppercase');
    }else {
        setSuccess(middelname);
    }
// firstname validation
    if(firstnameValue === '') {
        setError(firstname, 'First Name is required');
    }else if (firstnameValue.length < 2 ) {
        setError(firstname, 'First Name must be at least 2 character.') 
    }else if (!isValidFirstname(firstnameValue)){
        setError(firstname,'Provide a valid firstname 1st letter of the name should be in uppercase');
    }else {
        setSuccess(firstname);
    }
// lastname validation
    if(lastnameValue === '') {
        setError(lastname, 'Last Name is required');
    }else if (lastnameValue.length < 5 ) {
        setError(lastname, 'Last Name must be at least  5 character.') 
    }else if (!isValidLastname(lastnameValue)){
        setError(lastname,'Provide a valid lastname 1st letter of the name should be in uppercase');
    }else {
        setSuccess(lastname);
    }
// email validation
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
// phone validation
    if(phoneValue === '') {
        setError(phone, 'Phone is required');
    } else if (phoneValue.length < 10) {
        setError(phone, 'Phone must be 10 character.');
    } else if (!isValidPhone(phoneValue)){
        setError(phone, 'Enter a valid phone number');
    } else {
        setSuccess(phone);
    }
// password validation
    if(passwordValue === '') {
        setError(password, 'Password is required');
    }else if (passwordValue.length < 8) {
        setError(password, 'Phone must be at least 8 character.');
    }else if (!isValidPassword(passwordValue)) {
        setError(password, 'At least 1 lowercase letter, 1 uppercase letter,1 numeric digit,1 special character');
    }else {
        setSuccess(password);
    }
// re-password validation
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
      
};


//     document.getElementById("submit").onclick = function () 
//     {
//     document.getElementById("table").style.display = "block";
//     var table = document.getElementById("table");
//     var row = table.insertRow(-1);
//     var username = row.insertCell(0);
//     var email = row.insertCell(1);
//     var phone = row.insertCell(2);
//     var password = row.insertCell(3);
//     var password2 = row.insertCell(4);
//     username.innerHTML = document.getElementById("username").value;
//     email.innerHTML = document.getElementById("email").value;
//     phone.innerHTML = document.getElementById("phone").value;
//     password.innerHTML = document.getElementById("password").value;
//     password2.innerHTML = document.getElementById("password2").value;
    
  
//     return false;
//   };
  
