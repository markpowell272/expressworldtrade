import React, { useState } from "react";
import Background from "../components/Background";
import "../css/General.css";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { changePassword } from "../data";
import { ToastifyContext } from "../context/ToastifyContext";
import { UserContext } from "../context/UserContext";

const Passwordchange = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [UserState, setUserState] = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (password2 !== password3) {
      setToastifyState({
        ...ToastifyState,
        message: "Passwords does not match",
        variant: "error",
        open: true,
      });
      return setLoading(false);
    }

    const change = await changePassword(
      {
        password: password2,
        oldPassword: password1,
      },
      UserState.token
    );

    if (change.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: change.message,
        variant: "error",
        open: true,
      });
    }
    setToastifyState({
      ...ToastifyState,
      message: "Password Changed Successful",
      variant: "success",
      open: true,
    });
    navigate("/dashboard");
    setLoading(false);

    setPassword1("");
    setPassword2("");
    setPassword3("");
  };

  return (
    <>
      <Helmet>
        <title>ET-Options | Change Password</title>
      </Helmet>
      <Nav />
      <div className="general-container">
        <Background text="CHANGE PASSWORD" />
        <div className="body">
          <form onSubmit={handleSubmit} className="signin-form">
            <h2>CHANGE PASSWORD</h2>
            <div>
              <input
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="Enter your Current Password"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Enter Your New Password"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password3}
                onChange={(e) => setPassword3(e.target.value)}
                placeholder="Confirm Your New Password"
                required
              />
            </div>
            <button disabled={loading}>
              {loading ? "LOADING..." : "CHANGE PASSWORD"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Passwordchange;
