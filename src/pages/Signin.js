import React, { useState } from "react";
import Background from "../components/Background";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "../css/General.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { ToastifyContext } from "../context/ToastifyContext";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../data";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [UserState, setUserState] = React.useContext(UserContext);

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    let login = await loginUser({ email, password });

    if (login.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: login.message,
        variant: "error",
        open: true,
      });
    }

    sessionStorage.setItem("user", JSON.stringify(login));
    setUserState(login);
    setToastifyState({
      ...ToastifyState,
      message: "Login Successful",
      variant: "success",
      open: true,
    });

    setLoading(false);
    navigate("/dashboard");

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Helmet>
        <title>ET-Options | Login</title>
      </Helmet>
      <Nav />
      <div className="general-container">
        <Background text="LOGIN" />
        <div className="body">
          <form onSubmit={handleSubmit} className="signin-form mb-4">
            <h2>LOGIN FORM</h2>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
            </div>
            <div>
              <span style={{ position: "relative" }}>
                <input
                  type={showPassword ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  required
                />
                <span
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "-2px",
                    cursor: "pointer",
                  }}
                  onClick={handleShow}
                >
                  {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </span>
              </span>
            </div>
            <button disabled={loading}>
              {loading ? "LOADING..." : "LOGIN"}
            </button>
            <section style={{ marginTop: "20px" }}>
              <small>
                New here?{" "}
                <Link to="/register" style={{ color: "#ff7200" }}>
                  Register
                </Link>{" "}
                |{" "}
                <Link to="/forgot-password" style={{ color: "#ff7200" }}>
                  Forgot password?
                </Link>
              </small>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
