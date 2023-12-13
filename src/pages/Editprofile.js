import React, { useState } from "react";
import Background from "../components/Background";
import "../css/General.css";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { FaTelegramPlane } from "react-icons/fa";
import profilepic from "../assets/default.jpg";
import { UserContext } from "../context/UserContext";
import { updateUser, getUser } from "../data";
import { ToastifyContext } from "../context/ToastifyContext";

const Editprofile = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = React.useState(false);
  const [UserState, setUserState] = React.useContext(UserContext);

  const params = useParams();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = React.useState({
    name: UserState.name,
    username: UserState.username,
    email: UserState.email,
    phoneNumber: UserState.phoneNumber,
    file: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(userDetails);

    let formData = new FormData();

    formData.append("files", userDetails.file[0]);
    formData.append("name", userDetails.name);
    formData.append("phoneNumber", userDetails.phoneNumber);
    formData.append("username", userDetails.username);
    formData.append("email", userDetails.email);

    let profile = await updateUser(formData, UserState.token);

    if (profile.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: profile.message,
        variant: "error",
        open: true,
      });
    }

    setToastifyState({
      ...ToastifyState,
      message: "Profile Updated.",
      variant: "success",
      open: true,
    });

    let user = await getUser(UserState.token);

    if (user.error) {
      setLoading(false);
      setToastifyState({
        ...ToastifyState,
        message: user.message,
        variant: "error",
        open: true,
      });
      return navigate("/login");
    }
    sessionStorage.setItem("user", JSON.stringify(user));
    setUserState(user);

    setLoading(false);
    navigate("/dashboard", { state: "reload" });
  };

  return (
    <>
      <Helmet>
        <title>ET-Options | Edit Profile</title>
      </Helmet>
      <Nav />
      <div className="general-container">
        <Background text="EDIT PROFILE" />
        <div className="body">
          <form onSubmit={handleSubmit} className="signup-form mb-5">
            <h2>EDIT PROFILE</h2>
            <div
              style={{
                flexDirection: "column",
                width: "200px",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                padding: "0px",
              }}
            >
              <img
                src={
                  userDetails.file.length > 0
                    ? URL.createObjectURL(userDetails.file[0])
                    : UserState.profileImage &&
                      UserState.profileImage.length > 0
                    ? `https://expressworldtrade.onrender.com/${UserState.profileImage[0].link}`
                    : profilepic
                }
                alt=""
                style={{ width: "100%", margin: "0px" }}
              />
              <input
                type="file"
                accept="image/*"
                hidden
                name="img"
                id="img"
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    file: e.target.files,
                  })
                }
              />
              <label
                for="img"
                style={{
                  margin: "0px",
                  width: "100%",
                  borderRadius: "0px",
                  color: "white",
                  background: "var(--secondary)",
                  padding: 20,
                  cursor: "pointer",
                }}
              >
                Change Image
              </label>
            </div>
            <div>
              <input
                type="text"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                placeholder="Enter your Name"
              />
              <input
                type="text"
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
                placeholder="Enter your Username"
              />
            </div>
            <div>
              <input
                type="email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                placeholder="Enter your Email"
              />
              <input
                type="text"
                value={userDetails.phoneNumber}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    phoneNumber: e.target.value,
                  })
                }
                placeholder="Enter your Phone Number"
              />
            </div>
            <button disabled={loading}>
              <FaTelegramPlane />
              &nbsp;{loading ? "LOADING..." : "UPDATE PROFILE"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
