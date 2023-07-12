import React, { useState } from "react";
import "./test.css";
import BoardModal from "./BoardModal";

const Home = () => {
  const [modal_is_open, setModalIsOpen] = useState(false);
  return (
    <div className="parentDiv">
      <h1 className="sectionTitle">Home</h1>
      <div className="buttonDiv">
        <button className="goodButton" onClick={() => setModalIsOpen(true)}>
          NEW
        </button>
      </div>
      <BoardModal
        modal_is_open={modal_is_open}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
};
export default Home;
