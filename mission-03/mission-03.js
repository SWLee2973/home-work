// 변수 선언
let joinForm = document.querySelector('.join-form');
let emailInput = document.querySelector('.join-email');
const emailRegex = new RegExp('^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$');

function activeEmail() { // 이메일 폼 포커스 되었을 경우 실행
  joinForm.classList.add('is--focus'); // 포커스 클래스 추가
}

function isEnterInput() { // 폼에서 focus가 해제될 경우 실행
  if ((emailInput.value).length == 0) { // 이메일 입력 값이 없으면
    joinForm.classList.remove('is--focus'); // 포커스 클래스 제거
  }
}

function validInput() { // 이메일 input에 입력할 때 마다 실행
  if (!emailRegex.test(emailInput.value) && // 이메일 형식이 아니고
        (emailInput.value).length > 0) { // 이메일 입력 값이 있으면
    joinForm.classList.add('is--invalid'); // 경고문구 클래스 추가
  } else { // 그 외에
    joinForm.classList.remove('is--invalid'); // 경고문구 클래스 제거
  }
}