/*const loginId = document.getElementById("LOGIN_ID");
const loginPw = document.getElementById("LOGIN_PW");
const loginBtn = document.getElementById("LOGIN_BTN");

function color() {
  if (loginId.value.length > 0 && loginPw.value.length >= 1) {
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#C0DFFD";
    loginBtn.disabled = "disabled";
  }
}

function moveToMain() {
  location.replace("./main.html");
}

loginId.addEventListener("keyup", color);
loginPw.addEventListener("keyup", color);
loginBtn.addEventListener("click", moveToMain);*/

import "./Login.css";

function Login() {
  return (
    <article>
      <div className="login_wrapper">
        <div className="login_logo">Westagram</div>
        <form
          className="login_form"
          name="profile"
          action="./main.html"
          method="get"
          autocomplete="on"
        >
          <input
            id="LOGIN_ID"
            className="login_text"
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            id="LOGIN_PW"
            className="login_text"
            type="password"
            name="id"
            placeholder="비밀번호"
          />
          <button id="LOGIN_BTN" className="login_btn" type="button" disabled>
            로그인
          </button>
        </form>
        <a className="login_bottom" href=" ">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </article>
  );
}

export default Login;
