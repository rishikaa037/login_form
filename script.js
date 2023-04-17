const logregbox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-box ');
const registerLink = document.querySelector('.register-link')

registerLink.addEventListener('click ', () => {
    logregbox.classList.add('active');



});

loginLink.addEventListener('click ', () => {
    logregbox.classList.remove('active');



});




