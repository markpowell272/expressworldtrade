import React, { useState } from "react";
import Background from "../components/Background";
import "../css/General.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { ToastifyContext } from "../context/ToastifyContext";
import { resetPassword } from "../data";

const Passwordresetconfirm = () => {
  const [password, setPassword] = useState("");

  const params = useParams();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let reset = await resetPassword({ password }, params.id);

    if (reset.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: reset.message,
        variant: "error",
        open: true,
      });
    }

    if (!reset) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: "An error occurred, please try again",
        variant: "error",
        open: true,
      });
    }

    setToastifyState({
      ...ToastifyState,
      message: reset.message,
      variant: "success",
      open: true,
    });

    setLoading(false);
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title>ET-Options | Reset Password</title>
      </Helmet>
      <Nav />
      <div className="general-container">
        <Background text="RESET PASSWORD" />
        <div className="body">
          <form onSubmit={handleSubmit} className="signin-form">
            <h2>RESET PASSWORD</h2>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your New Password"
                required
              />
            </div>
            <button disabled={loading}>
              {loading ? "LOADING..." : "RESET PASSWORD"}
            </button>
            <section style={{ marginTop: "20px" }}>
              <small>
                <Link to="/login">GO TO LOGIN</Link>
              </small>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Passwordresetconfirm;
