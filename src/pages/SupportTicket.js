import React, { useState } from "react";
import Background from "../components/Background";
import "../css/General.css";
// import { Link } from 'react-router-dom'
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { FaTelegramPlane } from "react-icons/fa";

const SupportTicket = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubject("");
    setMessage("");
  };

  return (
    <>
      <Helmet>
        <title>ET-Options | Support Ticket</title>
      </Helmet>
      <Nav />
      <div className="general-container">
        <Background text="SUPPORT TICKET" />
        <div className="body">
          <form onSubmit={handleSubmit} className="signin-form">
            <h2>SUPPORT TICKET</h2>
            <div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Subject"
                required
              />
            </div>
            <div>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Message"
                required
              />
            </div>
            <button>
              <FaTelegramPlane />
              &nbsp;CONFIRM AND OPEN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SupportTicket;
