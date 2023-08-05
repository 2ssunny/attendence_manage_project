// import { Link } from "react-router-dom";
// import React from "react";

import logo from "../media/logo_transparent.png";

// import "./nav.css";

// function App() {
//   return (
//     <div>
//       <header className="title-header">
//         <Link to="/" className="tltle-text">
//           <img src={logo} className="title-logo" alt="logo" />
//         </Link>

//         <Link to="Register" className="tltle-text">
//           <span className="title-text2">등록하기</span>
//         </Link>

//         <Link to="Check" className="tltle-text">
//           <span className="title-text2">조회하기</span>
//         </Link>

//         <Link to="Signin" className="tltle-text">
//           <span className="title-text3">로그인/회원가입</span>
//         </Link>
//       </header>
//     </div>
//   );
// }

// export default App;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              src={logo}
              width="48"
              height="48"
              className="title-logo"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Register">등록하기</Nav.Link>
            <Nav.Link href="Check">조회하기</Nav.Link>
            <Nav.Link href="Signin">로그인/회원가입</Nav.Link>
            <Nav.Link href="Test">test</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
