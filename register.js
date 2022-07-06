const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const genderM = document.getElementById('genderM');
// const genderF = document.getElementById('genderF');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

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

const isValidEmail = email => {
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return re.test(String(email).toLowerCase());
}
const isValidUsername = username =>{
    const xe = /^[A-Z][a-zA-Z]+ [A-Z][a-zA-Z]+$/;
    return xe.test(String(username));
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
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
// username validation
    if(usernameValue === '') {
        setError(username, 'Username is required');
    }else if (usernameValue.length < 5 ) {
        setError(username, 'username must be at 5 character.') 
    }else if (!isValidUsername(usernameValue)){
        setError(username,'Provide a valid username');
    }else {
        setSuccess(username);
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
        setError(phone, 'Phone must be at 10 character.');
    } else if (!isValidPhone(phoneValue)){
        setError(phone, 'Enter a valid phone number');
    } else {
        setSuccess(phone);
    }
// password validation
    if(passwordValue === '') {
        setError(password, 'Password is required');
    }else if (passwordValue.length < 8) {
        setError(password, 'Phone must be at 8-15 character.');
    }else if (!isValidPassword(passwordValue)) {
        setError(password, 'At least 1 lowercase letter,1 uppercase letter,1 numeric digit,1 special character');
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
 return true;
    
//gender validation
    // if(genderM.checked==false && genderF.checked==false ){
    //     setError(genderM, "Please select something");
    //     // setError(genderF, "Please select something");
    // }else {
    //     setSuccess(genderF);
    //     // setSuccess(genderM);
    // }
      
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
  