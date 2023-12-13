import { useEffect, useState } from "react";
import React from "react";
import "../css/Navbar2.css";
import { Link, useNavigate } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { MdCall } from "react-icons/md";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { UserContext } from "../context/UserContext";
import logo from "../assets/logo.png";
import Muinavbar2 from "./Muinavbar2";
import profilepic from "../assets/default.jpg";
// import Muinavbar from "./Muinavbar";

const Navbar2 = () => {
  const [openButton, setOpenButton] = useState(true);
  const [openButton2, setOpenButton2] = useState(true);
  const [openButton3, setOpenButton3] = useState(true);
  const [UserState, setUserState] = React.useContext(UserContext);

  const navigate = useNavigate();

  const toggle = () => {
    setOpenButton(!openButton);
  };
  const toggle2 = () => {
    setOpenButton2(!openButton2);
  };
  const toggle3 = () => {
    setOpenButton3(!openButton3);
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setUserState({});
    navigate("/");
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav>
      <div className="navbarsub-container">
        <div>
          <span>
            <CgMail className="icon" />
            mail@expressworldtrade.option.com
          </span>
          <span className="left">
            <MdCall className="icon" />
            +1 (516) 806 8173
          </span>
        </div>
        <div className="acc">
          {UserState.username ? (
            <Link to="/dashboard">
              <img
                src={
                  UserState.profileImage && UserState.profileImage.length > 0
                    ? `https://expressworldtrade.onrender.com/${UserState.profileImage[0].link}`
                    : profilepic
                }
                height="40"
                width="40"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </Link>
          ) : (
            <>
              <Link to="/login">
                <AiOutlineUser className="icon" />
                Login
              </Link>
              <Link to="/register" className="left">
                <AiOutlineUserAdd className="icon" />
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="main-nav" id={sticky ? "sticky" : ""}>
        <div>
          <Link to="/">
            <img src={logo} alt="" width="60px" />
          </Link>
        </div>
        <Muinavbar2 />
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li
            className="account"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                cursor: "pointer",
                display: "inline",
                marginBottom: "0px",
              }}
              onClick={() => {
                toggle();
              }}
              className="x"
            >
              Investment
              <span>
                {openButton ? (
                  <BiDownArrow className="icon" />
                ) : (
                  <BiUpArrow className="icon" />
                )}
              </span>
            </p>
            <div className="auth1" id={openButton ? "auth" : ""}>
              <span>
                <Link to="/investment-package">Investment Package</Link>
              </span>
              <span>
                <Link to="/investment-history">Investment History</Link>
              </span>
            </div>
          </li>
          <li
            className="account"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                cursor: "pointer",
                display: "inline",
                marginBottom: "0px",
              }}
              onClick={() => {
                toggle2();
              }}
              className="x"
            >
              Transaction
              <span>
                {openButton2 ? (
                  <BiDownArrow className="icon" />
                ) : (
                  <BiUpArrow className="icon" />
                )}
              </span>
            </p>
            <div className="auth1" id={openButton2 ? "auth" : ""}>
              <span>
                <Link to="/deposit">Deposit Fund</Link>
              </span>
              <span>
                <Link to="/deposit-history">Deposit History</Link>
              </span>
              <span>
                <Link to="/withdraw">Withdraw Fund</Link>
              </span>
              <span>
                <Link to="/withdraw-history">Withdraw History</Link>
              </span>
              <span>
                <Link to="/transaction">Transaction Log</Link>
              </span>
            </div>
          </li>
          <li
            className="account"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                cursor: "pointer",
                display: "inline",
                marginBottom: "0px",
              }}
              onClick={() => {
                toggle3();
              }}
              className="x"
            >
              Hi {UserState.username}
              <span>
                {openButton3 ? (
                  <BiDownArrow className="icon" />
                ) : (
                  <BiUpArrow className="icon" />
                )}
              </span>
            </p>
            <div className="auth1 auth2" id={openButton3 ? "auth" : ""}>
              <span>
                <Link to="/edit-profile">Edit Profile</Link>
              </span>
              <span>
                <Link to="/change-password">Change Password</Link>
              </span>
              <span>
                <Link to="/support">Get Support</Link>
              </span>
              <span onClick={logout} style={{ cursor: "pointer" }}>
                <span>Logout</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
