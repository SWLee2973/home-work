let emailRegex = new RegExp('^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$');
let pwRegex = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$');

let emailInput = document.querySelector('.email-input');
let emailWarn = document.querySelector('.email-validate');
let pwInput = document.querySelector('.pw-input');
let pwWarn = document.querySelector('.pw-validate');

let loginButton = document.querySelector('.login-button');
let loginImg = document.querySelector('.login-img');

(function () {
  // 로그인 버튼 disabled 제어
  if (loginButton.classList.contains('is-invalid')) {
    loginButton.disabled=true;
  }

}) ();

function validInput() {
  if (emailRegex.test(emailInput.value) && pwRegex.test(pwInput.value)) {
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

  // 이메일 validate 문구
  if (!emailRegex.test(emailInput.value) && (emailInput.value).length > 0) {
    emailWarn.classList.add('is-visible');
  } else {
    emailWarn.classList.remove('is-visible');
  }

  // 비밀번호 validate 문구
  if (!pwRegex.test(pwInput.value) && (pwInput.value).length > 0) {
    pwWarn.classList.add('is-visible');
  } else {
    pwWarn.classList.remove('is-visible');
  }  
}

function activeEmail() {
  emailInput.classList.add('is-focus');
}

function activePw() {
  pwInput.classList.add('is-focus');
  
}

function isEnterInput() {
  if((emailInput.value).length == 0) {
    emailInput.classList.remove('is-focus');
  }

  if((pwInput.value).length == 0) {
    pwInput.classList.remove('is-focus');
  }
}