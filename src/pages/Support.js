import React from "react";
import Background from "../components/Background";
import "../css/General2.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";

const Suppoty = () => {
  return (
    <>
      <Helmet>
        <title>ET-Options | Support</title>
      </Helmet>
      <Nav />
      <div className="general-container2">
        <Background text="SUPPORT" />
        <div className="body">
          <div className="content">
            <div className="account-stats scroll-x">
              <span className="support-span">
                <h3 style={{ borderRadius: "0px", padding: "0px" }}>
                  SUPPPORT TICKET STATUS
                </h3>
                <Link
                  to="/support-open"
                  style={{ color: "rgb(8, 5, 34)" }}
                  className="button"
                >
                  + OPEN NEW SUPPORT TICKET
                </Link>
              </span>
              <div className="card-show ref-user">
                <div className="form">
                  <div>
                    Show entries:&nbsp;
                    <select>
                      <option value="">10</option>
                      <option value="">25</option>
                      <option value="">50</option>
                      <option value="">100</option>
                    </select>
                  </div>
                  <div>
                    Search:&nbsp;
                    <input type="text" />
                  </div>
                </div>
                <br />
                <table>
                  <thead>
                    <td>#&nbsp;ID</td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Register Date
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Usernae
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Name
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Email
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Phone Number
                    </td>
                    <td>
                      <TbArrowsDownUp />
                      &nbsp;Status
                    </td>
                  </thead>
                </table>
                <small className="division">No data available in table</small>
                <br />
                <div className="form">
                  <small>showing 0 of 0 entries</small>
                  <div>
                    <BsArrowLeftCircleFill />
                    &nbsp;&nbsp;
                    <BsArrowRightCircleFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppoty;
