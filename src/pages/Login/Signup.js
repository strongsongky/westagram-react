import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/Main")}
      id="LOGIN_BTN"
      className="login_btn"
      type="button"
    >
      로그인
    </button>
  );
};
export default Signup;
