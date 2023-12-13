import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { RiQuestionnaireLine } from "react-icons/ri";
import {
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineUserDelete,
} from "react-icons/ai";
import { GoDashboard } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { UserContext } from "../context/UserContext";

const Muinavbar = () => {
  const [UserState, setUserState] = React.useContext(UserContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("user");
    setUserState({});
    setOpenDrawer(false);
    navigate("/");
  };

  return (
    <div className="mobile-nav">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setOpenDrawer(true)}
      >
        <AiOutlineMenu
          style={{
            color: "white",
            fontSize: "30px",
            backgroundColor: "rgb(8, 5, 34)",
            borderRadius: "5px",
            padding: "3px",
          }}
        />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="close-icon">
          <AiOutlineClose onClick={() => setOpenDrawer(false)} />
        </div>
        <Box p={1} width="100%" textAlign="left">
          <Typography variant="h6" component="div">
            <li className="li x">
              <Link to="/" onClick={() => setOpenDrawer(false)}>
                <AiOutlineHome style={{ marginRight: "10px" }} />
                Home
              </Link>
            </li>
            <li className="li x">
              <Link to="/about" onClick={() => setOpenDrawer(false)}>
                <MdOutlineContacts style={{ marginRight: "10px" }} />
                About
              </Link>
            </li>
            <li className="li x">
              <Link to="/faqs" onClick={() => setOpenDrawer(false)}>
                <RiQuestionnaireLine style={{ marginRight: "10px" }} />
                FAQ
              </Link>
            </li>
            <li className="li x">
              <Link to="/contact" onClick={() => setOpenDrawer(false)}>
                <BsTelephone style={{ marginRight: "10px" }} />
                Contact
              </Link>
            </li>
            {!UserState.username ? (
              <>
                <li className="li x">
                  <Link to="/login" onClick={() => setOpenDrawer(false)}>
                    <AiOutlineUser style={{ marginRight: "10px" }} />
                    Login
                  </Link>
                </li>
                <li className="li x">
                  <Link to="/register" onClick={() => setOpenDrawer(false)}>
                    <AiOutlineUserAdd style={{ marginRight: "10px" }} />
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="li x">
                  <Link to="/dashboard" onClick={() => setOpenDrawer(false)}>
                    <GoDashboard style={{ marginRight: "10px" }} />
                    Dashboard
                  </Link>
                </li>
                <li className="li x">
                  <span onClick={logout} style={{ cursor: "pointer" }}>
                    <AiOutlineUserDelete style={{ marginRight: "10px" }} />
                    Logout
                  </span>
                </li>
              </>
            )}
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};

export default Muinavbar;
