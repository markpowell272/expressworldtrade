import { useEffect, useState } from "react";
import React from "react";
import "../css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { MdCall } from "react-icons/md";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import logo from "../assets/logo.png";
import { UserContext } from "../context/UserContext";
import Muinavbar from "./Muinavbar";
import profilepic from "../assets/default.jpg";

const Navbar = () => {
  const [UserState, setUserState] = React.useContext(UserContext);
  const [openButton, setOpenButton] = useState(true);

  const navigate = useNavigate();

  const toggle = () => {
    setOpenButton(!openButton);
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
  }, []);

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
        <Muinavbar />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faqs">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {!UserState.username ? (
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
                Account
                <span>
                  {openButton ? (
                    <BiDownArrow className="icon" />
                  ) : (
                    <BiUpArrow className="icon" />
                  )}
                </span>
              </p>
              <div className="auth" id={openButton ? "auth" : ""}>
                {UserState.username ? (
                  <>
                    <span>
                      <Link to="/dashboard">Dashboard</Link>
                    </span>
                    <span onClick={logout} style={{ cursor: "pointer" }}>
                      <span>Logout</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      <Link to="/login">Login</Link>
                    </span>
                    <span>
                      <Link to="/register">Register</Link>
                    </span>
                  </>
                )}
              </div>
            </li>
          ) : (
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
                Hi {UserState.username}
                <span>
                  {openButton ? (
                    <BiDownArrow className="icon" />
                  ) : (
                    <BiUpArrow className="icon" />
                  )}
                </span>
              </p>
              <div className="auth" id={openButton ? "auth" : ""}>
                <span>
                  <Link to="/dashboard">Dashboard</Link>
                </span>
                <span onClick={logout} style={{ cursor: "pointer" }}>
                  <span>Logout</span>
                </span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
