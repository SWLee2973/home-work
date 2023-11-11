let emailRegex = new RegExp('^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$');
let pwRegex = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$');

let emailInput = document.querySelector('.email-input');
let emailWarn = document.querySelector('.email-validate');
let pwInput = document.querySelector('.pw-input');
let pwWarn = document.querySelector('.pw-validate');
let pwButton = document.querySelector('.pw-view');

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
    emailWarn.classList.remove('is-active');
  } else {
    emailWarn.classList.remove('is-visible');
  }
  if (emailRegex.test(emailInput.value)){
    emailWarn.classList.add('is-active');
  }
  
  // 비밀번호 validate 문구
  if (!pwRegex.test(pwInput.value) && (pwInput.value).length > 0) {
    pwWarn.classList.add('is-visible');
    pwWarn.classList.remove('is-active');
  } else {
    pwWarn.classList.remove('is-visible');
  }  
  if (pwRegex.test(pwInput.value)){
    pwWarn.classList.add('is-active');
  }
}

function activeEmail() {
  emailInput.classList.add('is-focus');
}

function activePw() {
  pwInput.classList.add('is-focus');
  
}

function isEnterInput() {
  if ((emailInput.value).length == 0) {
    emailInput.classList.remove('is-focus');
  }

  if ((pwInput.value).length == 0) {
    pwInput.classList.remove('is-focus');
  }
}

function pwView() {
  if (!pwButton.classList.contains('is-onactive')) {
    pwButton.classList.add('is-onactive');
    pwInput.type='text';
  } else {
    pwButton.classList.remove('is-onactive');
    pwInput.type='password';
  }
}