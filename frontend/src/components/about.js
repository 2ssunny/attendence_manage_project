import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    console.log("fetcda");
    const header = {
      "Content-type": "application/json; charset=utf-8;",
      Accept: "application/json",
    };
    axios
      .get("http://127.0.0.1:8000/about/", { header })
      .then((response) => {
        setData(response.data.about);
      })
      .catch((response) => {
        alert(response.data.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [setData]);

  return (
    <div style={{ padding: 60 }}>
      <h1 style={{ fontSize: 62, fontWeight: "bold", padding: 30 }}>About</h1>
      <div>{data}</div>
    </div>
  );
};
export default About;
