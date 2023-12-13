import React, { useState } from "react";
import Background from "../components/Background";
import "../css/General.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { ToastifyContext } from "../context/ToastifyContext";
import { forgotPassword } from "../data";

const Passwordreset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let forgot = await forgotPassword({ email });

    if (forgot.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: forgot.message,
        variant: "error",
        open: true,
      });
    }

    setToastifyState({
      ...ToastifyState,
      message: forgot.message,
      variant: "success",
      open: true,
    });

    setLoading(false);
    setEmail("");
  };

  return (
    <>
      <Helmet>
        <title>ET-Options | Reset Password</title>
      </Helmet>
      <Nav />
      <div className="general-container">
        <Background text="FORGOT PASSWORD" />
        <div className="body">
          <form onSubmit={handleSubmit} className="signin-form">
            <h2>FORGOT PASSWORD</h2>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
            </div>
            <button disabled={loading}>
              {loading ? "LOADING..." : "SEND PASSWORD RESET LINK"}
            </button>
            <section style={{ marginTop: "20px" }}>
              <small>
                <Link to="/login" style={{ color: "#ff7200" }}>
                  Go back
                </Link>
              </small>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Passwordreset;
