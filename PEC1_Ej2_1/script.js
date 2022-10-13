const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const personalURL = document.getElementById('personalURL');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Functions
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        console.log(input.value);
        if (input.value.trim()==='') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input)
        }
    });
    
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
        
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`) 
    } else {
        showSuccess(input);
    }
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

function checkAgeRange(input, min, max) {
    if (parseInt(input.value, 10) < min) {
        showError(input, `Age must be >= ${min}`);
    } else if (parseInt(input.value, 10) >= max) {
        showError(input, `Age must be < ${max}`);
    }
}

function checkPersonalURL(input) {
    const re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (re.test(input.value.trim())) {
        showSuccess(input)
   } else if(input.value!=='') {
        showError(input, 'Domain not valid')
   }
        
}

function getFieldName(input) {
    const str = input.id;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
}

//Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, age, personalURL, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2)
    checkAgeRange(age, 0, 999)
    checkPersonalURL(personalURL);

});
