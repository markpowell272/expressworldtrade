import React from "react";
import Background from "../components/Background";
import "../css/General.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";

const Notfound = () => {
  return (
    <>
      <Helmet>
        <title>ET-Options | 404 - Not Found</title>
      </Helmet>
      <Nav />
      <div className="general-container">
        <Background text="PAGE NOT FOUND" />
        <div className="body">
          <h5 style={{ textAlign: "center" }}>
            {" "}
            Uh Oooh..Lost your way?...<Link to="/">Go back Home</Link>{" "}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Notfound;
