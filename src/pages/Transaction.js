import React from "react";
import Background from "../components/Background";
import "../css/General2.css";
// import { Link } from 'react-router-dom'
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";
import { transactionContext } from "../context/transactionContext";
// import loaderimg from "../assets/icons8-combo-chart.gif";
import Loader from "../components/Loader";

const Transaction = () => {
  const { transaction } = React.useContext(transactionContext);

  const [transactionState, setTransactionState] = transaction;

  console.log(transactionState);

  return (
    <>
      {!transactionState ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>ET-Options | Withdraw History</title>
          </Helmet>
          <Nav />
          <div className="general-container2">
            <Background text="TRANSACTION LOG" />
            <div className="body">
              <div className="content">
                <div className="account-stats scroll-x">
                  <h3>TRANSACTION LOG</h3>
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
                    {transactionState.length > 0 ? (
                      <table>
                        {/* NB: only completed transaction will come to this page */}
                        <thead>
                          <td>#&nbsp;ID</td>
                          <td>
                            <TbArrowsDownUp />
                            &nbsp;Date
                          </td>
                          <td>
                            <TbArrowsDownUp />
                            &nbsp;Transaction ID
                          </td>
                          <td>
                            <TbArrowsDownUp />
                            &nbsp;Type
                          </td>
                          <td>
                            <TbArrowsDownUp />
                            &nbsp;Status
                          </td>
                        </thead>
                        {transactionState.map((x, index) => {
                          return (
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{new Date(x.createdAt).toDateString()}</td>
                                <td>{x._id}</td>
                                <td>{x.type}</td>
                                <td>
                                  <small
                                    style={{
                                      padding: "3px",
                                      borderRadius: "5px",
                                      fontSize: "10px",
                                      color: "white",
                                      background:
                                        x.status === "pending"
                                          ? "gold"
                                          : x.status === "confirmed"
                                          ? "green"
                                          : x.status === "processing"
                                          ? "orange"
                                          : "red",
                                    }}
                                  >
                                    {x.status}
                                  </small>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </table>
                    ) : (
                      <small className="division">
                        No data available in table
                      </small>
                    )}
                    <br />
                    <div className="form">
                      <small>showing {transactionState.length} entries</small>
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
      )}
    </>
  );
};

export default Transaction;
