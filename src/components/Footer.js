import React from "react";
import "../css/Footer.css";
// import { BiSupport } from "react-icons/bi";
// import { BsChat } from "react-icons/bs";
// import { CgMail } from "react-icons/cg";
// import { MdCall } from "react-icons/md";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="info">
        <div className="info-box">
          <img src={logo} />
        </div>
        <div className="info-box">
          <ul>
            <h3>Contact</h3>
            <li>84 High Point Ave. El Dorado, AR 71730</li>
            <li className="d-flex align-items-center justify-content-center">
              <CgMail
                className="icon"
                style={{ width: "14px", height: "14px" }}
              />
              <span className="ms-1">Tradxpressinfo@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="info-box">
          <ul>
            <h3>Quick Links</h3>
            <li>
              <Link to="/">Privacy Policy</Link>{" "}
            </li>
            <li>
              <Link to="/">Security</Link>{" "}
            </li>
            <li>
              <Link to="/"> Help Center</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="info-box">
          <ul>
            <h3>Resources</h3>
            <li>
              <Link to="/">Legal Documents</Link>{" "}
            </li>
            <li>
              <Link to="/">About Us</Link>{" "}
            </li>
            <li>
              <Link to="/">Contact</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="sub">
        <p>
          Copyright &copy; {year}. All rights reserved, expressworldtrade.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
