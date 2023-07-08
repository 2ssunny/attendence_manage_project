import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
