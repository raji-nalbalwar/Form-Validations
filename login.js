const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

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
const isValidUsername = username =>{
    const xe = /^[A-Z][a-zA-Z]+ [A-Z][a-zA-Z]+$/;
    return xe.test(String(username));
}
const isValidPassword = password =>{
    const pa = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pa.test(password);
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
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
