import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import Resigter from "./components/Register.js";
import Check from "./components/Check.js";
import SignIn from "./components/account/SignIn";
import Signup from "./components/account/SignUp";
import Test from "./components/test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/register" element={<Resigter />} />
          <Route path="/check" element={<Check />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
