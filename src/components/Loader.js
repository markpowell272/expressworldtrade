import React from "react";
import logo from "../assets/logo.png";
import loader from "../assets/loading.gif";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <img
        src={logo}
        alt=""
        width="200px"
        style={{ display: "block", margin: "auto" }}
      />
      <img
        src={loader}
        alt="loading"
        width="100px"
        style={{ display: "block", margin: "auto", paddingLeft: "20px" }}
      />
    </div>
  );
};

export default Loader;
