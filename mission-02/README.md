<h1>미션 02 반응형 로그인 페이지 만들기</h1>

## 1. 준비물 준비
* figma에서 assets 다운로드
* mission-02.html, mission-02.css 생성

## 2. 헤더 제작 및 반응형 동작 적용
* 모바일에선 햄버거 메뉴, 데스크탑에선 메뉴 리스트 나열
> 헤더 영역에 이디야 커피 로고 및 메뉴 구성<br />
> ```display: flex``` 를 이용하여 좌우 정렬하고, 뷰포트 크기에 따라 wrapper 크기를 조절하며 양 여백을 조절 <br />
> 추가로 화면의 바탕 이미지를 삽입하였다.

![헤더제작](./screenshot/commit2.gif)

## 3. 모바일 로그인 페이지 반응형 동작 적용
* 모바일 화면 기준 (max-width: 600px)에서 작은 화면이 나오도록 구성
> 로그인 form을 만들어 form 내부에서 디자인 구성<br />
> input 박스는 shadow-box를 이용해 얇은 border를 구성<br />
> shadow-box가 화면 축소 및 확대 시 테두리가 보이는 현상이..<br />
> 자바스크립트 적용 시 로그인 버튼 disable로 적용 예정

![모바일 로그인 페이지](./screenshot/commit3.gif)