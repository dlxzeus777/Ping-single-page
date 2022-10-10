const form = document.querySelector('form');
const emailClass = document.querySelector('input');
const message = document.querySelector('.message');


form.addEventListener('submit', (e) =>
{
    e.preventDefault();
    let emailVal = emailClass.value;
    if(emailVal !== '' && validateEmail(emailVal))
    {
        emailClass.classList.add('success');
        message.innerHTML = 'Valid Email!';
    }
    else{
        emailClass.classList.remove('success');
        emailClass.classList.add('error');
        message.innerHTML = 'Invalid Email!';
    }
});


function validateEmail(email) {
    let re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  }