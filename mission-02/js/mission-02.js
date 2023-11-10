let emailRegex = new RegExp('[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}');
let emailInput = document.querySelector('.email-input');
let pwInput = document.querySelector('.pw-input');
let loginButton = document.querySelector('.login-button');
let loginImg = document.querySelector('.login-img');

(function () {
  // 로그인 버튼 disabled 제어
  if (loginButton.classList.contains('is-invalid')) {
    loginButton.disabled=true;
  }

}) ();

function testEmail() {
  if (emailRegex.test(emailInput.value) && (pwInput.value).length > 0) {
    loginButton.disabled=false;
    loginButton.classList.remove('is-invalid');
    emailInput.classList.add('is-active');
    loginButton.classList.add('is-valid');
    loginImg.src='images/arrow-blue.svg';

  } else {
    loginButton.disabled=true;
    loginButton.classList.remove('is-valid');
    loginButton.classList.add('is-invalid');
    loginImg.src='images/arrow-gray.svg';
  }
}

function activeInput() {
  
}