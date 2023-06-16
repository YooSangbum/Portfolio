const photo = document.querySelector('.photo');
const edu = document.querySelector('.edu');
const cer = document.querySelector('.cer');
const contact = document.querySelector('.contact');
const works = document.querySelector('.works');
const html = document.querySelector('.html_wrap');
const css = document.querySelector('.css_wrap');
const js = document.querySelector('.js_wrap');
const react = document.querySelector('.react_wrap');
const nodejs = document.querySelector('.nodejs_wrap');
const aws = document.querySelector('.aws_wrap');
const firebase = document.querySelector('.firebase_wrap');
const github = document.querySelector('.github_wrap');
const num_box = document.querySelector('.num_box');
const content = document.querySelector('.content');
const box_wrap = document.querySelector('.box_wrap');

const number1 = `
<div class="num_box">01</div>
<div class="con_box">
  <p class="content">
    이름: 유상범<br />
    생년월일: 1987.08.01<br />
    어린 시절부터 무언가를 조립하는걸 좋아했습니다. <br />
    순서대로 하나씩 맞추다보면 짜잔~ 하고 만들어진 완성품이 그렇게
    좋았습니다.<br />
    지금 그 어린 시절의 희열을 느끼고 있습니다. 조금은 늦었을지도 모를
    나이지만, 열정만큼은 그 누구에게도 뒤쳐지지 않는다고
    생각합니다.<br />
    언젠가 저 스스로도 하나의 완성품이 될거라 믿어의심치 않습니다.<br />
    그 길을 걸어가는 곧 완성 될 개발자, 유상범 입니다.
  </p>
</div>`;

const number2 = `
<div class="num_box">02</div>
<div class="con_box">
  <p class="content">
    2022. 12 ~ 2023. 6 그린아트컴퓨터학원<br />
    <span class="num2_sub">
      <산대특> 리액트(React), 리액트네이티브 EXPO 활용
      프론트앤드개발자 양성과정 </span
    ><br /><br />
    2012. 2 충남대학교 농업경제학과 졸업
  </p>
</div>`;

const number3 = `
<div class="num_box">03</div>
<div class="con_box">
  <p class="content">
    2011. 1종보통운전면허
  </p>
</div>`;

const htmlCon = ` 
<div class="num_box">04</div>
<div class="con_box">
  <p class="content">
    <strong>HTML</strong><br/>
    웹 표준을 기반으로 시맨틱 마크업을 통해 웹 페이지 구조 작성 가능합니다.<br />
    적응형 / 반응형 웹사이트 제작이 가능하며 경험이 있습니다.<br />
    애니메이션과 트랜지션을 사용하여 레이아웃 효과 구현 경험이 있습니다.<br />
    외부 라이브러리 TailwindCSS , BootStrap을 사용하여 레이아웃 작성 및 스타일일링이 가능합니다.
  </p>
</div>`;

const cssCon = ` 
<div class="num_box">04</div>
<div class="con_box">
  <p class="content">
    <strong>CSS</strong><br/>
    웹 표준을 기반으로 시맨틱 마크업을 통해 웹 페이지 구조 작성 가능합니다.<br />
    적응형 / 반응형 웹사이트 제작이 가능하며 경험이 있습니다.<br />
    애니메이션과 트랜지션을 사용하여 레이아웃 효과 구현 경험이 있습니다.<br />
    외부 라이브러리 TailwindCSS , BootStrap을 사용하여 레이아웃 작성 및 스타일일링이 가능합니다.
  </p>
</div>`;

const jsCon = ` 
<div class="num_box">04</div>
<div class="con_box">
  <p class="content">
    <strong>JS</strong><br/>
    ECMAScript 표준인 ES6이상의 문법과 기능을 사용 할 수 있으며 꾸준히 공부하고 있습니다. (클래서, 화살표함수, 비구조화할당).<br />
    기본적인 자바스크립트 문법, 변수, 조건문, 반복문, 함수 등을 이해하고 활용할 수 있습니다.<br />
    DOM을 사용하여 HTML문서의 요소를 선택하고 조작할 수 있습니다. (요소생성, 스타일 변경, 이벤트처리)<br />
    AJAX 비동기적 데이터 통신이 가능합니다. (Fetch, axios 등..)
  </p>
</div>`;

const reactCon = ` 
<div class="num_box">04</div>
<div class="con_box">
  <p class="content">
      <strong>REACT</strong><br/>
      JSX문법을 사용하여 컴포넌트를 구성하고  렌더링 및 구조를 작성 할 수 있습니다. <br/>
      React Hook을 사용하여 컴포넌트의 상태와 라이프사이클을 관리할 수 있습니다.<br/>
      React Router를 사용하여 라우팅을 구현하고 다양한 경로에 대한 컴포넌트를 렌더링 할 수 있습니다.<br/>
      React Bootstrap, Styled-components를 사용하여 컴포넌트에 스타일링이 가능합니다.<br/>
      Redux toolkit을 사용한 경험이 있습니다.<br/>
      axios를 이용하여 API 데이터를 받아와, 컴포넌트에 데이터를 바인딩한 경험이 있습니다<br/>
      React-Native 를 사용하여 어플리케이션 개발 경험이 있습니다<br/>
  </p>
</div>`;

const nodejsCon = ` 
<div class="num_box">04</div>
<div class="con_box">
  <p class="content">
      <strong>Node.js</strong><br/>
      Node.js의 비동기 특성을 이해하고 Promise, async/await 등을 사용해본 경험이 있습니다.<br/>
      Express.js 프레임워크, Mongo DB 데이터베이스를 사용하여 데이터의 생성, 조회, 수정, 삭제(CRUD)작업 개발 경험이 있습니다. 
  </p>
</div>`;

const awsCon = ` 
<div class="num_box">04</div>
<div class="con_box">
  <p class="content">
      <strong>AWS</strong><br/>
      API Gateway 와 Lamda를 연동을 통해 서버 배포를 진행하고 Cloudflare를 사용하여 UI 화면 코드를 배포하여 프로젝트를 완성한 경험이 있습니다. 
  </p>
</div>`;

const firebaseCon = ` 
<div class="num_box">04</div>
<div class="con_box">
  <p class="content">
      <strong>FIREBASE</strong><br/>
      Authentiation을 활용하여 회원가입 기능 사용<br/>
      Firestore Datebase를 활용한 데이터 핸들링<br/>
      Storage에 이미지저장하여 해당 이미지 url을 database에 저장하는 식으로 데이터베이스 용량 문제 해결<br/> 
      위와 같은 3가지 기능을 토대로 어플리케이션 구현하였습니다.
  </p>
</div>`;
const githubCon = ` 
<div class="num_box">04</div>
<div class="con_box">
  <p class="content">
      <strong>GitHub</strong><br/>
      Git을 사용하여 소스 코드의 버전 관리가 가능하며 변경사항을 추적하고 이전 버전으로 변경 및 브랜치 병합의 경험이 있습니다.<br/>
      github를 통해 원격 저장소를 생성하고, 로컬과 원격 저장소 간의 코드 push 및 pull을 통해 코드를 공유하고 협업할 수 있습니다.<br/>
      Markdown 형식을 활용하여 프로젝트의 README파일 등을 작성하고 관리할 수 있으며 프로젝트에 대한 정보와 설명을 제공할 수 있습니다.
  </p>
</div>`;

const number6 = `
<div class="num_box">06</div>
<div class="con_box">
  <p class="content">
    열정이 넘치는 사람을 찾고 계신가요?<br />
    ysbjjyes@gmail.com로 연락주세요.<br />
    아니다!!!제가 찾아가겠습니다.<br />기다려주세요. 전 당신과 함께
    일하고 싶어요 !!<br />
  </p>
</div>`;

photo.addEventListener('click', () => {
  box_wrap.innerHTML = number1;
});
edu.addEventListener('click', () => {
  box_wrap.innerHTML = number2;
});
cer.addEventListener('click', () => {
  box_wrap.innerHTML = number3;
});
html.addEventListener('click', () => {
  box_wrap.innerHTML = htmlCon;
});
css.addEventListener('click', () => {
  box_wrap.innerHTML = cssCon;
});
js.addEventListener('click', () => {
  box_wrap.innerHTML = jsCon;
});
react.addEventListener('click', () => {
  box_wrap.innerHTML = reactCon;
});
nodejs.addEventListener('click', () => {
  box_wrap.innerHTML = nodejsCon;
});
aws.addEventListener('click', () => {
  box_wrap.innerHTML = awsCon;
});
firebase.addEventListener('click', () => {
  box_wrap.innerHTML = firebaseCon;
});
github.addEventListener('click', () => {
  box_wrap.innerHTML = githubCon;
});
contact.addEventListener('click', () => {
  box_wrap.innerHTML = number6;
});

// Portfolio 모달창 닫고 열기
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

works.addEventListener('click', () => {
  popup.classList.add('on');
});
close.addEventListener('click', () => {
  popup.classList.remove('on');
});
