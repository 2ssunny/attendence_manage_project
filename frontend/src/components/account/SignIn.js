import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  return (
    <div>
      <div>
        <form method="POST" action=".">
          <div className="mb-3">
            <label for="useremail" className="form-label">
              사용자 이메일
            </label>
            <input
              type="text"
              className="form-control"
              id="useremail"
              placeholder="사용자 이메일"
              name="useremail"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              비밀번호
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="비밀번호"
              name="password"
            />
          </div>
          <div className="loginbutton">
            <button type="submit" className="btn btn-primary">
              로그인
            </button>
          </div>{" "}
        </form>
      </div>
      <div>
        <Link to="signup">
          <button className="btn btn-info">회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
