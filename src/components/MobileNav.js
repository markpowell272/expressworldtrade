import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { UserContext } from "../context/UserContext";

const MobileNav = ({ open, handleOpen }) => {
  const [UserState, setUserState] = React.useContext(UserContext);
  // const [openButton, setOpenButton] = useState(true);

  const navigate = useNavigate();
  const Auth = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    return user;
  };

  const userAuth = Auth();

  const logout = () => {
    sessionStorage.removeItem("user");
    setUserState({});
    navigate("/");
  };
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleShow2 = () => {
    setShow2(!show2);
  };
  const handleShow3 = () => {
    setShow3(!show3);
  };
  return (
    <ul className={open ? "mobile-nav" : "hide"}>
      <div className="close-icon">
        <MdOutlineClose className="close" onClick={handleOpen} />
      </div>
      <li onClick={() => handleOpen()}>
        <Link to="/">HOME</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/about">ABOUT</Link>
      </li>
      <li onClick={() => handleOpen()}>
        <Link to="/contact">CONTACT</Link>
      </li>
      {userAuth ? (
        <>
          <li>
            <div className="dropdown-mobile" onClick={handleShow2}>
              <span
                className="d-flex align-items-center justify-content-center span"
                style={{ padding: "20px" }}
              >
                <span style={{ marginRight: "5px" }}>INVESTMENT</span>
                <IoMdArrowDropdown />
              </span>
              <ul
                className={
                  show2
                    ? "dropdown-items-mobile-block"
                    : "dropdown-items-mobile"
                }
              >
                <li onClick={() => handleOpen()}>
                  <Link to="/investment-package">INVESTMENT PACKAGE</Link>
                </li>
                <li onClick={() => handleOpen()}>
                  <Link to="/investment-history">INVESTMENT HISTORY</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown-mobile" onClick={handleShow3}>
              <span
                className="d-flex align-items-center justify-content-center span"
                style={{ padding: "20px" }}
              >
                <span style={{ marginRight: "5px" }}>TRANSACTION</span>
                <IoMdArrowDropdown />
              </span>
              <ul
                className={
                  show3
                    ? "dropdown-items-mobile-block"
                    : "dropdown-items-mobile"
                }
              >
                <li onClick={() => handleOpen()}>
                  <Link to="/deposit">DEPOSIT FUND</Link>
                </li>
                <li onClick={() => handleOpen()}>
                  <Link to="/deposit-history">DEPOSIT HISTORY</Link>
                </li>
                <li onClick={() => handleOpen()}>
                  <Link to="/withdraw">WITHDRAW FUND</Link>
                </li>
                <li onClick={() => handleOpen()}>
                  <Link to="/withdraw-history">WITHDRAWAL HISTORY</Link>
                </li>
                <li onClick={() => handleOpen()}>
                  <Link to="/transaction">TRANSACTION LOG</Link>
                </li>
              </ul>
            </div>
          </li>
        </>
      ) : (
        <></>
      )}
      <li>
        {!userAuth ? (
          <div className="dropdown-mobile" onClick={handleShow}>
            <span
              className="d-flex align-items-center justify-content-center span"
              style={{ padding: "20px" }}
            >
              <span style={{ marginRight: "5px" }}>ACCOUNT</span>
              <IoMdArrowDropdown />
            </span>
            <ul
              className={
                show ? "dropdown-items-mobile-block" : "dropdown-items-mobile"
              }
            >
              <li onClick={() => handleOpen()}>
                <Link to="/register">REGISTER</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/login">LOGIN</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown-mobile" onClick={handleShow}>
            <span
              className="d-flex align-items-center justify-content-center span"
              style={{ padding: "20px" }}
            >
              <span style={{ marginRight: "5px" }}>
                HI {UserState.username}
              </span>
              <IoMdArrowDropdown />
            </span>
            <ul
              className={
                show ? "dropdown-items-mobile-block" : "dropdown-items-mobile"
              }
            >
              <li onClick={() => handleOpen()}>
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
              <li onClick={() => handleOpen()} className="logoutMobile">
                <span onClick={logout} style={{ cursor: "pointer" }}>
                  <span>LOGOUT</span>
                </span>
              </li>
            </ul>
          </div>
        )}
      </li>
    </ul>
  );
};

export default MobileNav;
