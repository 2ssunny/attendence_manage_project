import { Link } from "react-router-dom";
import React from "react";

import logo from "../media/logo_transparent.png";

import "./nav.css";

function App() {
  return (
    <div>
      <header className="title-header">
        <Link to="/" className="tltle-text">
          <img src={logo} className="title-logo" alt="logo" />
        </Link>

        <Link to="About" className="tltle-text">
          <span className="title-text2">등록하기</span>
        </Link>

        <Link to="Download" className="tltle-text">
          <span className="title-text2">조회하기</span>
        </Link>

        <Link to="Signin" className="tltle-text">
          <span className="title-text3">로그인/회원가입</span>
        </Link>
      </header>
    </div>
  );
}

export default App;
