const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


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

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}
const isValidPassword = password =>{
    const pa = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pa.test(password);
}
const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
// email validation
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');       
    } else {
        setSuccess(email);
   }
// password validation
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    }else if (!isValidPassword(passwordValue)) {
        setError(password, 'At least 1 lowercase letter,1 uppercase letter,1 numeric digit,1 special character');
    }else {
        setSuccess(password);
    }
};
